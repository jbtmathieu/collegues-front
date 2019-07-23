import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  notLogged = false;
  userNameLogged:String=null;


  constructor(private authservice:AuthService, private _srv:DataService) { }

deconnexion(){
  this.authservice.logout().subscribe();
  this.userNameLogged= null;
}


  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.notLogged=true;
    }



    this._srv
    .recupUser()
    .subscribe(userSelected => {
      if ((userSelected) != null){
      this.userNameLogged = userSelected.pseudo;
      }
  })

  }
  

}
