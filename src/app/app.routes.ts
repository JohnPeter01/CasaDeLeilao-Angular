import { Routes } from "@angular/router";

//Components
import { BuscaComponent } from "./busca/busca.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { HomeComponent } from "./home/home.component";
import { OfertasComponent } from "./ofertas/ofertas.component";

export const ROUTES:Routes = [
    {path:'', component:HomeComponent},
    {path:'ofertas',component:OfertasComponent},
    {path:'cadastro',component:CadastroComponent},
    {path:'busca/:product',component:BuscaComponent}
]