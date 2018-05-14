import { Component, OnInit } from '@angular/core';
import { Produto } from './produto/produto.model';
import { ServerService } from '../server.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'fl-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

nome:string;
produtos:Produto[];
 
 constructor(private ServerService:ServerService,private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.nome = params.nome);
  }

  ngOnInit() {
    if(this.nome != null){
   this.ServerService.buscaProdutoNome(this.nome)
   .subscribe(buscaProdutoNome => this.produtos = buscaProdutoNome)
    }else{
      this.ServerService.buscaTodosProdutos()
      .subscribe(buscaTodosProdutos => this.produtos = buscaTodosProdutos)
    }
  }

}
