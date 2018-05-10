import { Component, OnInit } from '@angular/core';
import { ProdutoCadastro } from './produto.model';
import {CadastroService} from './cadastro.service';

@Component({
  selector: 'fl-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

hidden:any;

  constructor(private CadastroService:CadastroService) { }

  ngOnInit() {
  }

  AllowNumbersOnly(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
          this.hidden = reader.result.split(',')[1]
      };
    }
  }

  RealizaCadastro(cadastro:ProdutoCadastro){
   cadastro.foto = this.hidden;
    cadastro.limiteVenda = cadastro.limiteVenda + ":00.00Z"
    this.CadastroService.realizaCadastro(cadastro).subscribe(() =>{alert(`Cadastro concluido com sucesso.`)})
  }
}
