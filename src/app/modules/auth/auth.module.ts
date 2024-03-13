import { NgModule } from "@angular/core";
import { AuthComponent } from "src/app/auth/auth.component";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        AuthRoutingModule,
        SharedModule
    ],
    exports: [

    ]
})
export class AuthModule {

}