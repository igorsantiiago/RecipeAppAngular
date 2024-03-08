import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit(): void { }

  truncateText(description: string, maxLength: number): string {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...'; // Truncate and add ellipsis
    } else {
      return description;
    }
  }
}
