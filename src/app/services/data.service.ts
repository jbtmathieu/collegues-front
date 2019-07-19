import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matriculesMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import { filter, map, catchError } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PhotoMatricule } from '../models/PhotoMatricule';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;
collegues: Collegue[]=[];

private subCollegueSelectionne = new Subject<Collegue>();
private subMatriculeSelectionne = new Subject<string>();

publier(coll:Collegue){
  this.subCollegueSelectionne.next(coll);
}

publierMatricule(str:string){
  this.subMatriculeSelectionne.next(str);
}

recup() : Observable<Collegue>{
  return this.subCollegueSelectionne.asObservable();
}

recupMatricule() : Observable<string>{
  return this.subMatriculeSelectionne.asObservable();
}

  constructor(private httpClient: HttpClient) { }
  

  getCollegues(): Observable<Collegue[]> {
    return this.httpClient
      .get<Collegue[]>('https://collegues-api-jpa.herokuapp.com/collegues?namefull=MARTIN')
      .pipe(
        map(tableauColleguesDuServeur =>
          tableauColleguesDuServeur.map(unCollegue => {
            return unCollegue;
          })
        )
      );
  }

  rechercherCollegueParNom(nom:string): Observable<string[]> {
    
    var address = 'https://collegues-api-jpa.herokuapp.com/collegues?name='+nom;
    return this.httpClient
    .get<string[]>(address)
    .pipe(
      map(tableauMatriculeDuServeur =>
        tableauMatriculeDuServeur.map(unMatricule => {
          return unMatricule;
        })
      )
    );
  }


  rechercherCollegueParMatricule(nom:string): Observable<Collegue> {
    
    var URL = 'https://collegues-api-jpa.herokuapp.com/collegues?matricule='+nom;
    return this.httpClient
    .get<Collegue>(URL);


  }

  modifier(matricule:string, collegue:Collegue): Observable<string[]> {
    
    var address = 'https://collegues-api-jpa.herokuapp.com/collegues/'+matricule;
    return this.httpClient
    .get<string[]>(address)
    .pipe(
      map(tableauMatriculeDuServeur =>
        tableauMatriculeDuServeur.map(unMatricule => {
          return unMatricule;
        })
      )
    );
  }


creerCollegue(coll:Collegue): Observable<string[]> {
  return this.httpClient.post<Collegue>('https://collegues-api-jpa.herokuapp.com/collegues?creer', coll)
    .pipe(
      catchError(this.handleError('addCollegue', Collegue))
    );
}

  rechercherParNom(nom: string): Observable<string[]>  {
    var address = 'https://collegues-api-jpa.herokuapp.com/collegues?name='+nom;
    return this.httpClient
    .get<string[]>(address)
    .pipe(
      map(tableauMatriculeDuServeur =>
        tableauMatriculeDuServeur.map(unMatricule => {
          return unMatricule;
        })
      )
    );
  }

  recupererMatriculePhoto(): Observable<Map<string, string>>{
    var URL = 'https://collegues-api-jpa.herokuapp.com/collegues/photos';
     
    return this.httpClient
        .get<any>(URL)
        .pipe(map(el =>{
          let mapPhoto = new Map<string, string>();
          for(let key in el) {
            mapPhoto.set(key, el[key]);
          }
          return mapPhoto;
        }));
  
    }
  


  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return collegueMock;
  }
}
