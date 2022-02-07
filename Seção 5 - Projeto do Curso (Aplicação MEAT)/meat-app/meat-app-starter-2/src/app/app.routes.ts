import { Routes } from "@angular/router"; //Tipo padrão para rotas do angular
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { AboutComponent } from "./about/about.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'about', component: AboutComponent }
]