import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Trigo', 5),
    new Ingredient('Tomate', 10),
    new Ingredient('Calabresa', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.updateIngredient(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    ingredients.forEach(newIngredient => {
      this.updateIngredient(newIngredient);
    });
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  private updateIngredient(newIngredient: Ingredient) {
    const existingIngredientIndex = this.ingredients.findIndex(ingredient =>
      ingredient.name.toLowerCase() === newIngredient.name.toLowerCase());
    if (existingIngredientIndex !== -1) {
      this.ingredients[existingIngredientIndex].amount += Number(newIngredient.amount);
    } else {
      this.ingredients.push(newIngredient);
    }
  }
}

