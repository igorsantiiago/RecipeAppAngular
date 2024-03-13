import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth/_guards/auth.guard";
import { RecipesResolverService } from "src/app/recipes/_services/recipes-resolver.service";
import { RecipeDetailComponent } from "src/app/recipes/recipe-detail/recipe-detail.component";
import { RecipeFormComponent } from "src/app/recipes/recipe-form/recipe-form.component";
import { RecipeListHomeComponent } from "src/app/recipes/recipe-list-home/recipe-list-home.component";
import { RecipesComponent } from "src/app/recipes/recipes.component";

const routes: Routes = [
    {
        path: '', component: RecipesComponent, canActivate: [AuthGuard], children: [
            { path: '', component: RecipeListHomeComponent, resolve: [RecipesResolverService] },
            { path: 'new', component: RecipeFormComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
            { path: ':id/edit', component: RecipeFormComponent, resolve: [RecipesResolverService] }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipesRoutingModule {

}