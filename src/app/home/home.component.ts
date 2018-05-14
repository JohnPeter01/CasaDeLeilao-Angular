import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'fl-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
  }

  RealizaBusca(busca:string){
    this.router.navigate(['produtos', busca]);
  }
}
