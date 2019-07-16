import { Component, OnInit } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  matriculeC = matriculesMock;
  
  recherche:boolean= false;

  quandOnRecherche(){
    this.recherche = true; 

  }

  constructor() { }

  ngOnInit() {
  }

}
