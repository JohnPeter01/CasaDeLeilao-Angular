import { Produto } from "./produto/produto.model";
import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {LEILAO_API} from '../app.api';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "../app.erro-handler";

@Injectable()
export class ProdutoService{
    constructor(private http: Http){}

    buscaProdutoNome():Observable<Produto[]> {
         return this.http.get(`${LEILAO_API}/produtos`)
    .map(response => <Produto[]>response.json()).catch(ErrorHandler.handleError);
    }
}