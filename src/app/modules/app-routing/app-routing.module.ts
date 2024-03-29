import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: () => import('../recipes/recipes.module').then(module => module.RecipesModule) },
  { path: 'shopping-list', loadChildren: () => import('../shopping/shopping.module').then(module => module.ShoppingModule) },
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then(module => module.AuthModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
