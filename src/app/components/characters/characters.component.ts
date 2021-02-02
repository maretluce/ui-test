import { Component, OnInit, DoCheck } from '@angular/core';

// JSON file
import listCharacters from './../../../assets/json/bd.json';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./../../scss/app.component.scss']
})
export class CharactersComponent implements OnInit, DoCheck {
  
  characters: any = listCharacters;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(){ }

}
