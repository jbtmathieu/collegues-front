import { Component } from '@angular/core';

class DdnPhoto { val1:string; val2:string;}

@Component({
    selector: 'mon-form',
    template: `
        <h1>Formulaire piloté par le template</h1>
        <form (ngSubmit)="submit()">

            <label>Champ 1</label><input [(ngModel)]="monModel.val1" name="val1">

            <label>Champ 2</label><input [(ngModel)]="monModel.val2" name="val2">

            <button type="submit">Submit</button>
        </form>`
})
export class MonForm {

    // la propriété monModel est mise à jour automatiquement avec la saisie utilisateur
    // grâce au binding bi-directionnel  [(ngModel)]
    ddnPhoto:DdnPhoto = new DdnPhoto();

    submit() {
        console.log(this.ddnPhoto);
    }
}