import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],

})
export class CollegueComponent implements OnInit {

  @Input() col:Collegue;
  @Output() change:EventEmitter<string> = new EventEmitter<string>();

  envoi(saisieTexte:string) {
    if (saisieTexte) {

    }
  }

versNouveauCollab(){

}

reset(saisieTexte:HTMLInputElement){
  saisieTexte.value="";
  saisieTexte.focus();

}
  
  constructor(private _srv: DataService) { }

  ngOnInit() {
    
  }

}
