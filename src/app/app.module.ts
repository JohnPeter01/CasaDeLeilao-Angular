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
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ROUTES} from './app.routes';
import { CadastroService } from './cadastro/cadastro.service';
import { BuscaComponent } from './busca/busca.component';
import { Incremento } from './ofertas/incremento.model'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OfertasComponent,
    ProdutoComponent,
    CadastroComponent,
    FooterComponent,
    BuscaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProdutoService,CadastroService,Incremento],
  bootstrap: [AppComponent]
})
export class AppModule { }
