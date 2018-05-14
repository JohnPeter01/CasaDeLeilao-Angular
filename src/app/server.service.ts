import { LEILAO_API } from './app.api';
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "./app.erro-handler";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

//Classes
import { Produto } from "./produtos/produto/produto.model";
import { ProdutoCadastro } from "./cadastro/produto.model";
import { Incremento } from "./produtos/incremento.model";
import { Ofertas } from "./produtos/ofertas.model";

@Injectable()
export class ServerService {
    constructor(private http: Http) { }
// Metodos GET
    buscaTodosProdutos(): Observable<Produto[]> {
        return this.http.get(`${LEILAO_API}/produtos`)
            .map(response => <Produto[]>response.json()).catch(ErrorHandler.handleError);
    }

    buscaProdutoNome(nome:string): Observable<Produto[]> {
        return this.http.get(`${LEILAO_API}/produtos/${nome}`)
            .map(response => <Produto[]>response.json()).catch(ErrorHandler.handleError);
    }

// Metodos POST
    realizaCadastro(cadastro: ProdutoCadastro): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        const options = new RequestOptions({ headers: headers });
        return this.http.post(`${LEILAO_API}/produtos`,
            JSON.stringify(cadastro),
            options).map(response => response.text());

    }

    realizaOferta(oferta: Ofertas): Observable<Produto> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        const options = new RequestOptions({ headers: headers });
        return this.http.post(`${LEILAO_API}/produtos/oferta`,
            JSON.stringify(oferta),
            options).map(response => response.json())
    }

    realizaOfertaIncremento(incremento: Incremento): Observable<Produto> {
        console.log(JSON.stringify(incremento));
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        const options = new RequestOptions({ headers: headers });
        return this.http.post(`${LEILAO_API}/produtos/incremento`,
            JSON.stringify(incremento),
            options).map(response => response.json())
    }
}