import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { MEAT_API } from "../app.api";
import { User } from "../security/login/user.model";
import { Router, NavigationEnd } from "@angular/router";

@Injectable()
export class LoginService {

    private lastUrl: string;

    private user: User;

    constructor(private http: HttpClient, private router: Router) {
        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
    }

    public get User(): User {
        return this.user;
    }

    login(email: string, senha: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`,
            { email: email, password: senha })
            .do(user => this.user = user);
    }

    isLoggedIn() {
        return this.user !== undefined;
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)]);
    }

    logout() {
        this.user = undefined;
    }
}