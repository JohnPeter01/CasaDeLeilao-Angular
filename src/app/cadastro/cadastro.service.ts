
import { Injectable } from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {LEILAO_API} from '../app.api';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "../app.erro-handler";
import { ProdutoCadastro } from "./produto.model";

@Injectable()
export class CadastroService{
    constructor(private http: Http){}

    realizaCadastro(cadastro:ProdutoCadastro):Observable<ProdutoCadastro> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin' ,'*');
        const options = new RequestOptions({headers: headers});
         return this.http.post(`${LEILAO_API}/produtos`,
                                        JSON.stringify(cadastro),
                                   options).map(response => response.json())
    }
}