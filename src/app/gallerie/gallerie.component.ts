import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PhotoMatricule } from '../models/PhotoMatricule';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';
@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  photoMatricule : Map<string, string>;
  modifierCollab=false;
  col:Collegue = collegueMock;

  constructor(private _srv:DataService) { }

  selectionner(matricule:string){
    if (!this.modifierCollab) {
      this.modifierCollab = true;
      this._srv.rechercherCollegueParMatricule(matricule)
      .subscribe(colR=>{
        this.col=colR;
      })
  

      }else this.modifierCollab = false;
    }
  
  ngOnInit() {
  this._srv.recupererMatriculePhoto()
  .subscribe(matrPhotoRecup => {this.photoMatricule = matrPhotoRecup;
  console.log(matrPhotoRecup) }, (error:any) =>{
    console.log(error);
  });
  }
}
