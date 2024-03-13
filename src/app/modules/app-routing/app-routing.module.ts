import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { ShoppingListComponent } from 'src/app/shopping/shopping-list/shopping-list.component';
import { RecipeListHomeComponent } from 'src/app/recipes/recipe-list-home/recipe-list-home.component';
import { RecipeDetailComponent } from 'src/app/recipes/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from 'src/app/recipes/recipe-form/recipe-form.component';
import { RecipesResolverService } from 'src/app/recipes/_services/recipes-resolver.service';
import { AuthComponent } from 'src/app/auth/auth.component';
import { AuthGuard } from 'src/app/auth/_guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], children: [
      { path: '', component: RecipeListHomeComponent/*, resolve: [RecipesResolverService]*/ },
      { path: 'new', component: RecipeFormComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':id/edit', component: RecipeFormComponent, resolve: [RecipesResolverService] }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
