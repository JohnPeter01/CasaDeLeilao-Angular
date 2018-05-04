import { Component, OnInit } from '@angular/core';
import { Produto } from './produto/produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'fl-ofertas',
  templateUrl: './ofertas.component.html'
})
export class OfertasComponent implements OnInit {

  produtos:Produto[];
  constructor(private ProdutoService:ProdutoService) { }

  ngOnInit() {
   this.ProdutoService.buscaProdutoNome('Produto')
   .subscribe(buscaProdutoNome => this.produtos = buscaProdutoNome)
  }

}
