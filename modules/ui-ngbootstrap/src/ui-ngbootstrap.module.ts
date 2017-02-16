import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormsCoreModule } from "@ng2-dynamic-forms/core";
import { DynamicFormNgBootstrapComponent } from "./dynamic-form-ngbootstrap.component";

@NgModule({

    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        DynamicFormsCoreModule
    ],
    declarations: [
        DynamicFormNgBootstrapComponent
    ],
    exports: [
        DynamicFormsCoreModule,
        DynamicFormNgBootstrapComponent
    ]
})

export class DynamicFormsBootstrapUIModule {
}