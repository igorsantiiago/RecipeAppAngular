import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth/_guards/auth.guard";
import { ShoppingListComponent } from "src/app/shopping/shopping-list/shopping-list.component";

const routes: Routes = [
    { path: '', canActivate: [AuthGuard], component: ShoppingListComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingRoutingModule {

}


