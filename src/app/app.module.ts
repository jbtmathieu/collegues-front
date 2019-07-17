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

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    CollegueModifierComponent,
    RechercheParNomComponent,
    ColleguesAfficherComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
