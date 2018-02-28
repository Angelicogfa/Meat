import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw'

export class ErrorHandler {
    static handlerError(error: HttpErrorResponse | any) {
        let erroMessage:string;

        if(error instanceof HttpErrorResponse)
        {
            const body = error.error;
            erroMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`;
        }
        else
        {
            erroMessage = error.erroMessage ? error.erroMessage : error.toString();
        }

        console.log(erroMessage);
        return Observable.throw(erroMessage);
    }
}