import { Routes } from "@angular/router"; //Tipo padrão para rotas do angular
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
]