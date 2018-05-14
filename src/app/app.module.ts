//Modules
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';

//Service
import { ServerService } from './server.service';

//Outros
import {ROUTES} from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProdutosComponent,
    ProdutoComponent,
    CadastroComponent,
    FooterComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
