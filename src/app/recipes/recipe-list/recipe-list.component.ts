import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Croissant', 'Descrição para a receita de croissant.', 'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/hbb55kkx7qqpibi8uxh2.jpg'),
    new Recipe('Macarronada', 'Descrição para a receita de macarronada.', 'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/eydiaphhe0dhbvb0i9be.jpg'),
    new Recipe('Pizza', 'Descrição para a receita de pizza.', 'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/uia38xen8odcrpqcmfvr.jpg')
  ];

  constructor() {

  }

  ngOnInit(): void { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
