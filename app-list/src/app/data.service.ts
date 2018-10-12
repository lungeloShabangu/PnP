import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  items: string[]=['Butter','Bread','Salt'];
//returns string arrat 
  getItems(): string[]{
    return this.items;
  }
  constructor() { }
}
