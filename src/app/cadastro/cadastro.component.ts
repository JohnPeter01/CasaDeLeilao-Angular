import { Component, OnInit } from '@angular/core';
import { Cadastro } from './cadastro.model';
import {CadastroService} from './cadastro.service';

@Component({
  selector: 'fl-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  constructor(private CadastroService:CadastroService) { }

  ngOnInit() {
  }

  AllowNumbersOnly(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }

  RealizaCadastro(cadastro:Cadastro){
    this.CadastroService.realizaCadastro(cadastro).subscribe(() =>{console.log(`Cadastro concluido com sucesso.`)})
  }
}
