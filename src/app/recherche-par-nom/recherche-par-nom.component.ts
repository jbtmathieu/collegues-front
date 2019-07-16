import { Component, OnInit } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  matriculeC = matriculesMock;
  texteSaisie:HTMLInputElement;
  recherche:boolean= false;

  quandOnRecherche(texteSaisie){
    this.recherche = true; 
    this.matriculeC = this._srv.rechercherParNom(texteSaisie.valeur);

  }

  constructor(private _srv: DataService) { }

  ngOnInit() {
  }

}
