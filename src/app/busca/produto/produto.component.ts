import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './produto.model';

@Component({
  selector: 'fl-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {

  @Input() produto:Produto;
  foto:File;
  
  constructor() { }

  ngOnInit() {
    this.foto = this.blobToFile(this.produto.foto,'foto.png');
  }

  AllowNumbersOnly(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }

  blobToFile = (theBlob: Blob, fileName:string): File => {
    var b: any = theBlob;
    b.lastModifiedDate = new Date();
    b.name = fileName;
    return <File>theBlob;
}

}
