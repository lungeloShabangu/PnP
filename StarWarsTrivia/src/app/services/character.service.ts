import { Injectable } from '@angular/core';
import { Character } from '../classes/character';
import { CHARACTERS } from '../classes/data-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }
  getCharacter(): Promise<Character[]>{
    return Promise.resolve(CHARACTERS);
  }
}