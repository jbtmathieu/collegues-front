import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { collegueMock } from '../mock/collegues.mock';

@Component({
  selector: 'app-collegue-modifier',
  templateUrl: './collegue-modifier.component.html',
  styleUrls: ['./collegue-modifier.component.css']
})
export class CollegueModifierComponent implements OnInit {

  col:Collegue=collegueMock;
  @Output() change:EventEmitter<string> = new EventEmitter<string>();
  modifierButtonView=false;

  constructor(private _srv: DataService) { }

public modifierButtonAction(){
  this.modifierButtonView=true;
}

public validerButtonAction(){
  this.modifierButtonView=false;

}

  ngOnInit() {
    this._srv
    .recup()
    .subscribe(colSelected => (this.col = colSelected));
  }

}
