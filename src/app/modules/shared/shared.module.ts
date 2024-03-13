import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DropdownDirective } from "src/app/shared/_directives/dropdown.directive";
import { LoadingSpinnerComponent } from "src/app/shared/loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        DropdownDirective
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        LoadingSpinnerComponent,
        DropdownDirective,
        RouterModule,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class SharedModule {

}