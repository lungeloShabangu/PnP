import { Component, OnInit } from '@angular/core';
import { Character } from '../../classes/character';
import { CharacterService } from '../../services/character.service';
@Component({
  selector: 'app-charecter-list',
  templateUrl: './charecter-list.component.html',
  styleUrls: ['./charecter-list.component.css'],
  providers:[CharacterService]
})
export class CharecterListComponent implements OnInit {
  characters: Character[];
  //This is implimentation of dependency injection
  constructor(private characterService: CharacterService) { }

  getCharacters(): void {
    // this statement returns a promise and 
    this.characterService.getCharacter()
    // the then statement assigns the characters array defined at the top of the class
    .then(characters=> this.characters=characters);
  }
  ngOnInit() {
    this.getCharacters();
  }

}

