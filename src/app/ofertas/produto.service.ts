import { Produto } from "./produto/produto.model";
import { Injectable } from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {LEILAO_API} from '../app.api';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "../app.erro-handler";
import { Ofertas } from "./ofertas.model";
import { Incremento } from "./incremento.model";

@Injectable()
export class ProdutoService{
    constructor(private http: Http){}

    buscaProdutoNome():Observable<Produto[]> {
         return this.http.get(`${LEILAO_API}/produtos`)
    .map(response => <Produto[]>response.json()).catch(ErrorHandler.handleError);
    }

    realizaOferta(oferta:Ofertas):Observable<Produto[]> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin' ,'*');
        const options = new RequestOptions({headers: headers});
        return this.http.post(`${LEILAO_API}/produtos/oferta`,
                                    JSON.stringify(oferta),
                                   options).map(response => response.json())
    }

    realizaIncremento(incremento:Incremento):Observable<Produto[]> {
        console.log(JSON.stringify(incremento));
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin' ,'*');
        const options = new RequestOptions({headers: headers});
        return this.http.post(`${LEILAO_API}/produtos/incremento`,
                                        JSON.stringify(incremento),     
                                   options).map(response => response.json())
    }
}