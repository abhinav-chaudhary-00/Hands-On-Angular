import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  recipe: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'assets/recipe.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'assets/recipe.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
