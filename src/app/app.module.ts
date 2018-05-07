import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ProdutoComponent } from './ofertas/produto/produto.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutoService } from "./ofertas/produto.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { importType } from '@angular/compiler/src/output/output_ast';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OfertasComponent,
    ProdutoComponent,
    CadastroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
