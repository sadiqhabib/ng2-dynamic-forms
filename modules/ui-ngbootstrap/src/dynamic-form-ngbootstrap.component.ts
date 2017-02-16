import { Component, Input, Output, EventEmitter, QueryList, ContentChildren } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
    DynamicFormControlComponent,
    DynamicFormControlModel,
    DynamicFormControlEvent,
    DynamicFormRelationService,
    DynamicTemplateDirective
} from "@ng2-dynamic-forms/core";

export const DYNAMIC_FORM_UI_NGBOOTSTRAP = "NGBOOTSTRAP";

@Component({

    moduleId: module.id,
    selector: "dynamic-form-ngbootstrap-control",
    templateUrl: "./dynamic-form-ngbootstrap.component.html"
})

export class DynamicFormNgBootstrapComponent extends DynamicFormControlComponent {

    @Input() bindId: boolean = true;
    @Input() controlGroup: FormGroup;
    @Input() hasErrorMessaging: boolean = false;
    @Input() model: DynamicFormControlModel;
    @Input() nestedTemplates: QueryList<DynamicTemplateDirective>;

    @Output() blur: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() change: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
    @Output() focus: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

    @ContentChildren(DynamicTemplateDirective) templates: QueryList<DynamicTemplateDirective>;

    readonly type: string = DYNAMIC_FORM_UI_NGBOOTSTRAP;

    constructor(relationService: DynamicFormRelationService) {
        super(relationService);
    }
}