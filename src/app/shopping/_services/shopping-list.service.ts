import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Trigo', 5),
    new Ingredient('Tomate', 10),
    new Ingredient('Calabresa', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    ingredient.amount = +ingredient.amount;
    this.updateIngredient(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    ingredients.forEach(newIngredient => {
      this.updateIngredient(newIngredient);
    });
    this.ingredientsChanged.next(this.ingredients.slice());
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

