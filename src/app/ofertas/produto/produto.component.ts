import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './produto.model';
import { Ofertas } from '../ofertas.model';
import { ProdutoService } from '../produto.service';
import { Incremento } from '../incremento.model';
import { OfertasComponent } from '../ofertas.component';

@Component({
  selector: 'fl-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {

  @Input() produto:Produto;
  incremento:Incremento;
  oferta:Ofertas; 
  
  constructor(private ProdutoService:ProdutoService) { }

  ngOnInit() {
  }

  AllowNumbersOnly(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }

RealizaOferta(oferta:number,id:number){
  this.oferta = {"id":id,"oferta":oferta};
  this.ProdutoService.realizaOferta(this.oferta).subscribe(() =>{alert(`Oferta realizada com sucesso.`)})
 }

RealizaIncremento(id:number){
  this.incremento = {"id":id};
  this.ProdutoService.realizaIncremento(this.incremento).subscribe(() => {alert(`Oferta por lance mínimo realizada com sucesso`)})
}

}
