import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { matriculesMock } from '../mock/matricules.mock';

@Component({
  selector: 'app-collegues-afficher',
  templateUrl: './collegues-afficher.component.html',
  styleUrls: ['./collegues-afficher.component.css']
})
export class ColleguesAfficherComponent implements OnInit {
collegues: Collegue[]=[];
matricules: string[]=matriculesMock;

  constructor(private _serv:DataService) { }

  ngOnInit() {
    this._serv
    .getCollegues()
    .subscribe(colleguesRecupere => this.collegues = colleguesRecupere);
    //.rechercherCollegueParNom("RAY")
    //.subscribe(matrs => this.matricules = matrs);
  }

  recherche(nom:string){

  }

selectionner(unCollegue:Collegue){
  this._serv.publier(unCollegue);
}
  
}
