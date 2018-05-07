import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { OfertasComponent } from "./ofertas/ofertas.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

export const ROUTES:Routes = [
    {path:'', component:HomeComponent},
    {path:'ofertas',component:OfertasComponent},
    {path:'cadastro',component:CadastroComponent}
]