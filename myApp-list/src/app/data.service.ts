import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: string[]=['Butter','Bread','Salt'];
//returns string array
  getItems(): string[]{
    return this.items;
  }
  constructor() { }
}
