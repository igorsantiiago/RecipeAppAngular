import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ShoppingListService } from '../_services/shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingredientForm: FormGroup;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredientForm = new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'ingredientAmount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0+9]*$')])
    })

    this.subscription = this.shoppingListService.startEditMode.subscribe((index: number) => {
      this.editItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIndividualIngredient(index);
      this.ingredientForm.setValue({
        ingredientName: this.editedItem.name,
        ingredientAmount: this.editedItem.amount
      })
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newIngredient = new Ingredient(this.ingredientForm.value.ingredientName, this.ingredientForm.value.ingredientAmount);

    this.shoppingListService.addIngredientFromForm(newIngredient);

    this.shoppingListService.clearActive();
    this.resetForm();
  }

  onDelete() {
    this.shoppingListService.removeIngredient(this.editedItem);

    this.shoppingListService.clearActive();
    this.resetForm();
  }

  onResetForm() {
    this.shoppingListService.clearActive();
    this.resetForm();
  }


  private resetForm() {
    this.ingredientForm.reset();
    this.editMode = false;
  }
}
