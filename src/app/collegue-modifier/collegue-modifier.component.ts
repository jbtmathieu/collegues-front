import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue-modifier',
  templateUrl: './collegue-modifier.component.html',
  styleUrls: ['./collegue-modifier.component.css']
})
export class CollegueModifierComponent implements OnInit {

  @Input() col:Collegue;
  @Output() change:EventEmitter<string> = new EventEmitter<string>();
  modifierButtonView=false;

  constructor() { }

public modifierButtonAction(){
  this.modifierButtonView=true;
}

public validerButtonAction(){
  this.modifierButtonView=false;

}

  ngOnInit() {
    //this.modifierButtonView=true;
  }

}
