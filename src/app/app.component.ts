import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
@Component({
  selector: 'app-root',
  template: `
 <!-- <app-collegue [col]=collegueMock></app-collegue> -->
 <div class="container-fluid">
 <div class="row">
 <div class="col-4">
 <app-recherche-par-nom></app-recherche-par-nom>
 </div>
 <div class="col-8">
 <app-collegue-modifier [col]=collegueMock> </app-collegue-modifier></div>
 </div>    
</div>

  `,
  styles: []
})
export class AppComponent {
  collegueMock = collegueMock;
  title = 'collegues-front';
}
