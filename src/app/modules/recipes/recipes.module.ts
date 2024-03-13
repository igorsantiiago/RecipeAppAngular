import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "src/app/recipes/recipe-detail/recipe-detail.component";
import { RecipeFormComponent } from "src/app/recipes/recipe-form/recipe-form.component";
import { RecipeItemComponent } from "src/app/recipes/recipe-item/recipe-item.component";
import { RecipeListHomeComponent } from "src/app/recipes/recipe-list-home/recipe-list-home.component";
import { RecipeListComponent } from "src/app/recipes/recipe-list/recipe-list.component";
import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeListHomeComponent,
        RecipeFormComponent
    ],
    imports: [
        RecipesRoutingModule,
        SharedModule
    ],
    exports: [

    ]
})
export class RecipesModule {

}