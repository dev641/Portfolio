import { ContactModel } from "../model/ContactModel";
import { ContactData } from "../types/Model";
import { ThemeFinder } from "../types/util";
import { ContactView } from "../view/ContactView";
import { Controller } from "./Controller";

export class ContactController extends Controller<ContactModel, ContactView, ContactData, HTMLDivElement> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (model: ContactModel, view: ContactView, themeFinder: ThemeFinder) {
        super(model, view, themeFinder)
    }

}