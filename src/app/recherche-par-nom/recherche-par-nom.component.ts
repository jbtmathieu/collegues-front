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
    .subscribe(matrRecup => {this.matricules = matrRecup}, (error:any) =>{
      /*this.matricules=[];
      this.matricules.push(error+" "+error.value);
      this.matricules.push("123");*/
    });

    if (this.matricules.length === 0) {
      this.matricules=[];
      this.matricules.push("Pas d'utilisateurs à ce nom.")
    }
    }else {
      this.matricules=[];
      this.matricules.push("Zone de saisie vide");
    }
  }

  constructor(private _srv: DataService) { }

  ngOnInit() {
    
  }

}
