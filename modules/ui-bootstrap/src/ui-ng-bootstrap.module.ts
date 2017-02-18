import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DynamicFormsCoreModule } from "@ng2-dynamic-forms/core";
import { DynamicFormNGBootstrapComponent } from "./dynamic-form-ng-bootstrap.component";

@NgModule({

    imports: [
        CommonModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
        DynamicFormsCoreModule
    ],
    declarations: [
        DynamicFormNGBootstrapComponent
    ],
    exports: [
        DynamicFormsCoreModule,
        DynamicFormNGBootstrapComponent
    ]
})

export class DynamicFormsNGBootstrapUIModule {
}