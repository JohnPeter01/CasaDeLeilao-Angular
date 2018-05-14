import { Routes } from "@angular/router";

//Components
import { CadastroComponent } from "./cadastro/cadastro.component";
import { HomeComponent } from "./home/home.component";
import { ProdutosComponent } from "./produtos/produtos.component";

export const ROUTES:Routes = [
    {path:'', component:HomeComponent},
    {path:'produtos',component:ProdutosComponent},
    {path:'produtos/:nome',component:ProdutosComponent},
    {path:'cadastro',component:CadastroComponent},
]