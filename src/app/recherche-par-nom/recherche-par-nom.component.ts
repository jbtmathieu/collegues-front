import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {


  @Output() texteSaisiEvt: EventEmitter<string> = new EventEmitter();

  matricules: string []=[];
  texteSaisi:HTMLInputElement;
  collegues: Collegue[]=[];
  matriculeC: string[] = [];

  recherche:boolean= false;

  quandOnRecherche(texteSaisi:HTMLInputElement){
    if (texteSaisi.value){
    this.recherche = true; 
    //this.texteSaisiEvt.emit(texteSaisi.value);
    this._srv
    .rechercherCollegueParNom(texteSaisi.value)
    .subscribe(matrRecup => this.matricules = matrRecup);
    }else {

    }
  }

  constructor(private _srv: DataService) { }

  ngOnInit() {
    
 
  }

}
