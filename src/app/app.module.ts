import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { CollegueModifierComponent } from './collegue-modifier/collegue-modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    CollegueModifierComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
