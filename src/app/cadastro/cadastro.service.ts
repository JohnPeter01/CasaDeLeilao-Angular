
import { Injectable } from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {LEILAO_API} from '../app.api';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "../app.erro-handler";
import { Cadastro } from "./cadastro.model";

@Injectable()
export class CadastroService{
    constructor(private http: Http){}

    realizaCadastro(cadastro:Cadastro):Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type','application/json')
         return this.http.post(`${LEILAO_API}/cadastro`,
                                        JSON.stringify(cadastro),
                                    new RequestOptions({headers:headers}))
                                    .map(response => response.json())
    }
}