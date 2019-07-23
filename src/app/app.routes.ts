import { Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AuthentificationComponent } from './authentification/authentification.component';


export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'gallerie', component: GallerieComponent },
    { path: 'apropos', component: AccueilComponent },
    { path: 'login', component: AuthentificationComponent }
];