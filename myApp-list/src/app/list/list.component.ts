import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[DataService]
})
export class ListComponent implements OnInit {
  
  itemsRecieved: string[]=[''];

  getItemsFromServiceClass(){
    this.itemsRecieved = this.dataService.getItems();
    // dependence injection occurs here.
  }
    constructor(private dataService: DataService) { }

  ngOnInit() {
  }
}
