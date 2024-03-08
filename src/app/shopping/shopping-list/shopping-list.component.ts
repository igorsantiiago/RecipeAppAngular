import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ShoppingListService } from '../_services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientChangeSubscription: Subscription;

  private clearActiveIndexSubscription: Subscription;
  activeIndex: number = null;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangeSubscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });

    this.clearActiveIndexSubscription = this.shoppingListService.clearActiveIndex.subscribe(() => {
      this.activeIndex = null;
    });
  }

  ngOnDestroy(): void {
    this.ingredientChangeSubscription.unsubscribe();
    this.clearActiveIndexSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditMode.next(index);
    this.activeIndex = index; // Define o índice do ingrediente ativo
  }
}
