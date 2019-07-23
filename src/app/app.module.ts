import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { CollegueModifierComponent } from './collegue-modifier/collegue-modifier.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ColleguesAfficherComponent } from './collegues-afficher/collegues-afficher.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CollegueFormDdnPhotoComponent } from './collegue-form-ddn-photo/collegue-form-ddn-photo.component';
import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    CollegueModifierComponent,
    RechercheParNomComponent,
    ColleguesAfficherComponent,
    CollegueFormDdnPhotoComponent,
    AccueilComponent,
    MenuComponent,
    GallerieComponent,
    AuthentificationComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
