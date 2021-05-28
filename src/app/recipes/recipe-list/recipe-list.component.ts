import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Assorted Seafood and Quiche', 'Eggwhites, Baby Spinach, Chopped Red Onions, and a buttery cheddar quiche topped with shrimp, and sprinkled with dillweed, pepper, and lemon!', 'https://c.pxhere.com/photos/ab/0d/Foods_Lunch_Prawn_Prawns_Seafood_Shrimps-1622529.jpg!d'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
