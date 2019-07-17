import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matriculesMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import { filter, map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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
  rechercherParNom(nom: string): string[]  {
    // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`. 
    return matriculesMock; 
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return collegueMock;
  }
}
