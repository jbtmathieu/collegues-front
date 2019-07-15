import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../Models/Collegue';
import { collegueMock } from '../mock/collegues.mock';
//import { collegueMock } from '../mock/collegues.mock';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col:Collegue;


  constructor() { }

  ngOnInit() {
  }

}
