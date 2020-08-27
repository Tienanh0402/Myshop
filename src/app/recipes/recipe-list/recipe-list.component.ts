import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('one','simplysd sd','https://static2.clutch.co/s3fs-public/logos/recipe_advertising_logo.png'),
    new Recipe('two','simply test','https://static2.clutch.co/s3fs-public/logos/recipe_advertising_logo.png')
  ];  
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe ){
    this.recipeWasSelected.emit(recipe);
  }
}
