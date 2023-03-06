import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomato', 10),
    new Ingredients('Banana', 7),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
