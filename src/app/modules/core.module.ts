import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "../auth/auth-interceptor.service";
import { RecipeService } from "../recipes/_services/recipe.service";
import { ShoppingListService } from "../shopping/_services/shopping-list.service";

@NgModule({
    declarations: [

    ],
    providers: [
        ShoppingListService,
        RecipeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    imports: [

    ],
    exports: [

    ]
})
export class CoreModule {

}