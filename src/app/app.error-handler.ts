import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw'
import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";
import { NotificationService } from "./shared/messages/notification.service";
import { LoginService } from "./core/login.service";

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private loginService: Injector,
        private zone: NgZone,
        private notificationService: NotificationService) {
        super();
    }

    handlerError(errorResponse: HttpErrorResponse) {

        if (errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.error.message;
            this.zone.run(()=>{
            switch (errorResponse.status) {
                case 401:
                    this.loginService.get(LoginService).handleLogin();
                    break;
                case 403:
                    this.notificationService.notify(message || 'Não autorizado.');
                    break;
                case 404:
                    this.notificationService.notify(message || 'Recurso não localizado. Verifiqque o console para mais detalhes.');
                    break;
            }});
        }
        console.log(errorResponse);
        super.handleError(errorResponse);
    }
}