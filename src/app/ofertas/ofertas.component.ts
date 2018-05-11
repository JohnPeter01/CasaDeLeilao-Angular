import { Component, OnInit } from '@angular/core';
import { Produto } from './produto/produto.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'fl-ofertas',
  templateUrl: './ofertas.component.html'
})
export class OfertasComponent implements OnInit {

  produtos:Produto[];
  constructor(private ServerService:ServerService) { }

  ngOnInit() {
   this.ServerService.buscaProdutoNome()
   .subscribe(buscaProdutoNome => this.produtos = buscaProdutoNome)
  }

}
