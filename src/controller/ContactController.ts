import { Autobind } from "../decorator/Utils";
import { ContactModel } from "../model/ContactModel";
import { ContactData } from "../types/Model";
import { FieldType, ThemeFinder } from "../types/util";
import { ContactField } from "../util/Enum";
import { ContactView } from "../view/ContactView";
import { Controller } from "./Controller";

export class ContactController extends Controller<ContactModel, ContactView, ContactData, HTMLDivElement> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (model: ContactModel, view: ContactView, themeFinder: ThemeFinder) {
        super(model, view, themeFinder)

        this.View.initiateListener(this.controlForm)
    }

    controlName(value: string): void {
        this.Model.updateForm({value, type: ContactField.NAME})
    }
    controlPhone(value: string): void {
        this.Model.updateForm({value, type: ContactField.PHONE})
    }

    controlEmail(value: string): void {
        this.Model.updateForm({value, type: ContactField.EMAIL})
    }

    controlSubject(value: string): void {
        this.Model.updateForm({value, type: ContactField.SUBJECT})
    }

    controlMessage(value: string): void {
        this.Model.updateForm({value, type: ContactField.MESSAGE})
    }

    controlSubmit(value: Object): void {
        debugger
       this.Model.updateForm({value, type: ContactField.SUBMIT})
    }

    @Autobind
    controlForm({value, type}: {value: string, type: FieldType}): void {
        debugger
        const {NAME, PHONE, EMAIL, SUBJECT, MESSAGE, SUBMIT} = ContactField
        switch (type) {
            case NAME:
                this.controlName(value)
                break
            case PHONE:
                this.controlPhone(value)
                break
            case EMAIL:
                this.controlEmail(value)
                break
            case SUBJECT:
                this.controlSubject(value)
                break
            case MESSAGE:
                this.controlMessage(value)
                break
            case SUBMIT:
                debugger
                this.controlSubmit(value)
                break
            default:
                break
        }
    }
}
