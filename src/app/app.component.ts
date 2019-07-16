import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
@Component({
  selector: 'app-root',
  template: `
 <!-- <app-collegue [col]=collegueMock></app-collegue> -->
 <app-collegue-modifier [col]=collegueMock> </app-collegue-modifier>
  `,
  styles: []
})
export class AppComponent {
  collegueMock = collegueMock;
  title = 'collegues-front';
}
