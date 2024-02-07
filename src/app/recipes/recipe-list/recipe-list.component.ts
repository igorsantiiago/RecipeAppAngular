import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a description for the recipe', 'https://duet-cdn.vox-cdn.com/thumbor/0x0:3024x4032/1920x2560/filters:focal(2130x3256:2131x3257):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25181362/ai_chocolate_cakes.jpg'),
    new Recipe('A Test Recipe', 'This is a description for the recipe', 'https://duet-cdn.vox-cdn.com/thumbor/0x0:3024x4032/1920x2560/filters:focal(2130x3256:2131x3257):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25181362/ai_chocolate_cakes.jpg')
  ];

  constructor() {

  }

  ngOnInit(): void { }
}
