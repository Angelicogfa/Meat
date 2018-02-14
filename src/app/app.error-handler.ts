import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
    static handlerError(erro: Response | any) {
        let erroMessage:string;

        if(erro instanceof Response){
            erroMessage = `Erro ${erro.status} ao acessar a url ${erro.url} - ${erro.statusText}`;
        }else{
            erroMessage = erro.toString();
        }

        console.log(erroMessage);
        return Observable.throw(erroMessage);
    }
}