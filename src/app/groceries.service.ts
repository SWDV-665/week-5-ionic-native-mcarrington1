import { Injectable } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  constructor() { }

  items = 
  [
    { name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 3
    },
    {
      name: "Oranges",
      quantity: 5
    },
    {
      name: "Mangos",
      quantity: 15
    },
    {
      name: "Mt. Dew",
      quantity: 12
    }
  ]

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index] = item;
  }
}