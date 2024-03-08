import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditMode = new Subject<number>();
  clearActiveIndex = new Subject<void>();

  private ingredients: Ingredient[] = [
    new Ingredient('Trigo', 5),
    new Ingredient('Tomate', 10),
    new Ingredient('Calabresa', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIndividualIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredientFromForm(ingredient: Ingredient) {
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

  clearActive() {
    this.clearActiveIndex.next();
  }

  removeIngredient(ingredient: Ingredient) {
    const existingIngredientIndex = this.ingredients.findIndex(item =>
      item.name.toLowerCase() === ingredient.name.toLowerCase());
    if (existingIngredientIndex !== -1) {
      this.deleteIngredient(existingIngredientIndex);
    } else {
      console.error("Ingredient not found:", ingredient);
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }


  private updateIngredient(newIngredient: Ingredient) {
    const existingIngredientIndex = this.ingredients.findIndex(ingredient =>
      ingredient.name.toLowerCase() === newIngredient.name.toLowerCase());

    if (existingIngredientIndex !== -1) {
      const updatedAmount = this.ingredients[existingIngredientIndex].amount + Number(newIngredient.amount);
      if (updatedAmount > 0) {
        this.ingredients[existingIngredientIndex].amount = updatedAmount;
      } else {
        this.deleteIngredient(existingIngredientIndex);
      }
    } else {
      if (Number(newIngredient.amount) > 0) {
        this.ingredients.push(newIngredient);
      }
    }
  }

  private deleteIngredient(ingredient: number) {
    this.ingredients.splice(ingredient, 1);
  }
}

