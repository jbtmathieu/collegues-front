import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Utilisateur } from './models/Utilisateur';
import { DataService } from './services/data.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<Utilisateur>=new BehaviorSubject<Utilisateur>(null);
    public currentUser: Observable<Utilisateur>;

    constructor(private http: HttpClient, private _srv:DataService) {
      this.currentUserSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUser')));
      //this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Utilisateur {
      return this.currentUserSubject.value;
  }


    login(nomUtilisateur: string, motDePasse: string) {
      return this.http.post<any>(environment.backendUrl+'/auth', { nomUtilisateur, motDePasse }, {withCredentials:true})
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  //localStorage.setItem('currentUser', JSON.stringify(user));
                  console.log("inpipe token"+user);
                  //this.currentUserSubject.next(user);
              }

          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      //this.currentUserSubject.next(null);
      return this.http.get<any>(environment.backendUrl+'/logout',{withCredentials:true});
          
  }
  
  //logout() {
    //return this.http.get('http://localhost:8080/logout', {withCredentials:true}); 
        
}
