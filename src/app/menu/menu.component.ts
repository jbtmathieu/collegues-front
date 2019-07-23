import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  notLogged = false;
  constructor(private authservice:AuthService) { }

deconnexion(){
  this.authservice.logout().subscribe();
}


  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.notLogged=true;
    }
  }

}
