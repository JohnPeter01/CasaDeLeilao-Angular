import { Produto } from "./produto/produto.model";
import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {LEILAO_API} from '../app.api';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProdutoService{
    constructor(private http: Http){}

    buscaProdutoNome(nome:string):Observable<Produto[]> {
         return this.http.get(`${LEILAO_API}/leilao/?nome=${nome}`)
    .map(response => <Produto[]>response.json());
    }
}