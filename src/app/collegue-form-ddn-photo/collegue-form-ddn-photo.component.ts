import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { FormArray } from '@angular/forms';
import { EmailPhotoModel } from '../models/EmailPhotoModel';

@Component({
  selector: 'app-collegue-form-ddn-photo',
  templateUrl: './collegue-form-ddn-photo.component.html',
  styleUrls: ['./collegue-form-ddn-photo.component.css']
})
export class CollegueFormDdnPhotoComponent implements OnInit {

 
  @Output() change:EventEmitter<string> = new EventEmitter<string>();
  modifierButtonView=false;
  col:Collegue=collegueMock;
  actionSub:Subscription;
  emailPhotoModel = new EmailPhotoModel();
  formGroup: FormArray;
  modifInvalide=true;
 



  constructor(private _srv: DataService) { }

public modifierButtonAction(){
  this.modifierButtonView=true;

}

public validerButtonAction(){
  this.modifierButtonView=false;
  //this._srv.modifierEmail();
  this.col.email = this.emailPhotoModel.email;
  this.col.photoUrl = this.emailPhotoModel.photoUrl;
  this._srv.modifier(this.col.matricule, this.col);
}

  ngOnInit() {
    
    this.emailPhotoModel.email= this.col.email;
    this.emailPhotoModel.photoUrl= this.col.photoUrl;
    this._srv
    .recup()
    .subscribe(colSelected => {this.col = colSelected;
      this.emailPhotoModel.email= this.col.email;
      this.emailPhotoModel.photoUrl= this.col.photoUrl});


  }

  ngOnDestroy(){
    //this.actionSub.unsubscribe();
  }

}
