
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mon-composant',
    template: `<button (click)="quandOnClique()">Clic</button>`
})
export class Collegue {
    
    constructor (public matricule:string, public nom:string,public prenoms: string,
    public dateDeNaissance: Date, public photoUrl: string){

    }

    @Output() change:EventEmitter<string> = new EventEmitter<string>();

    quandOnClique() {
        this.change.emit('du nouveau')
    }
}