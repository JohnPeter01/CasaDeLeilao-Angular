import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fl-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AllowNumbersOnly(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
}
