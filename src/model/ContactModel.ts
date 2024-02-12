import { type ContactData } from "../types/Model";
import Model from "./Model";

export class ContactModel extends Model<ContactData> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (contactData: ContactData) {
        super(contactData)
    }
}