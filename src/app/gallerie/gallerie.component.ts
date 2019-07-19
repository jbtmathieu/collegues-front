import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PhotoMatricule } from '../models/PhotoMatricule';
@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  photoMatricule : Map<string, string>;


  constructor(private _srv:DataService) { }

  selectionner(){

  }
  
  ngOnInit() {
  this._srv.recupererMatriculePhoto()
  .subscribe(matrPhotoRecup => {this.photoMatricule = matrPhotoRecup;
  console.log(matrPhotoRecup) }, (error:any) =>{
    console.log(error);
  });
  }
}
