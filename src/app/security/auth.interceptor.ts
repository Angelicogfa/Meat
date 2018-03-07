import { HttpInterceptor, HttpHeaders } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";
import { LoginService } from "../core/login.service";
import { Injectable, Injector } from "@angular/core";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const loginService = this.injector.get(LoginService);

        let _headers = new HttpHeaders();

        if (loginService.isLoggedIn()) {
            const authRequest = req.clone({ setHeaders: { 'Authorization': `Bearer ${loginService.User.accessToken}` } });
            return next.handle(authRequest);
        } else {
            return next.handle(req);
        }
    }
}