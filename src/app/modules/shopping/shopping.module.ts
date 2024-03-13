import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "src/app/shopping/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "src/app/shopping/shopping-list/shopping-list.component";
import { ShoppingComponent } from "src/app/shopping/shopping.component";
import { ShoppingRoutingModule } from "./shopping-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppingComponent,
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        ShoppingRoutingModule,
        SharedModule
    ],
    exports: [

    ]
})

export class ShoppingModule {

}