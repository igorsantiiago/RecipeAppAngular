import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { ShoppingListService } from 'src/app/shopping/_services/shopping-list.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Croissant', 'Descrição para a receita de croissant.',
      'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/hbb55kkx7qqpibi8uxh2.jpg',
      [
        new Ingredient('Trigo', 1),
        new Ingredient('Frango', 1)
      ]),
    new Recipe('Macarronada', 'Descrição para a receita de macarronada.',
      'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/eydiaphhe0dhbvb0i9be.jpg',
      [
        new Ingredient('Macarrão', 1),
        new Ingredient('Tomate', 2),
        new Ingredient('Cebola', 2)
      ]),
    new Recipe('Pizza', 'Descrição para a receita de pizza.',
      'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/uia38xen8odcrpqcmfvr.jpg',
      [
        new Ingredient('Trigo', 1),
        new Ingredient('Molho de Tomate', 1),
        new Ingredient('Queijo', 8),
        new Ingredient('Calabresa', 20),
        new Ingredient('Oregano', 1),
      ]), new Recipe('Croissant', 'Descrição para a receita de croissant.',
        'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/hbb55kkx7qqpibi8uxh2.jpg',
        [
          new Ingredient('Trigo', 1),
          new Ingredient('Frango', 1)
        ]),
    new Recipe('Macarronada', 'Descrição para a receita de macarronada.',
      'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/eydiaphhe0dhbvb0i9be.jpg',
      [
        new Ingredient('Macarrão', 1),
        new Ingredient('Tomate', 2),
        new Ingredient('Cebola', 2)
      ]),
    new Recipe('Pizza', 'Descrição para a receita de pizza.',
      'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/uia38xen8odcrpqcmfvr.jpg',
      [
        new Ingredient('Trigo', 1),
        new Ingredient('Molho de Tomate', 1),
        new Ingredient('Queijo', 8),
        new Ingredient('Calabresa', 20),
        new Ingredient('Oregano', 1),
      ]), new Recipe('Croissant', 'Descrição para a receita de croissant.',
        'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/hbb55kkx7qqpibi8uxh2.jpg',
        [
          new Ingredient('Trigo', 1),
          new Ingredient('Frango', 1)
        ]),
    new Recipe('Macarronada', 'Descrição para a receita de macarronada.',
      'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/eydiaphhe0dhbvb0i9be.jpg',
      [
        new Ingredient('Macarrão', 1),
        new Ingredient('Tomate', 2),
        new Ingredient('Cebola', 2)
      ]),
    new Recipe('Pizza', 'Descrição para a receita de pizza.',
      'https://res.cloudinary.com/dz4vge9zk/image/upload/v1708355988/udemy-recipeapp/uia38xen8odcrpqcmfvr.jpg',
      [
        new Ingredient('Trigo', 1),
        new Ingredient('Molho de Tomate', 1),
        new Ingredient('Queijo', 8),
        new Ingredient('Calabresa', 20),
        new Ingredient('Oregano', 1),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }
}
