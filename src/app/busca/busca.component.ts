import { Component, OnInit } from '@angular/core';
import { Produto } from './produto/produto.model';

@Component({
  selector: 'fl-busca',
  templateUrl: './busca.component.html'
})
export class BuscaComponent implements OnInit {

  produtos:Produto;

  constructor() { }

  ngOnInit() {
  }

}
