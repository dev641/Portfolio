import { type ContactData } from "../types/Model";
import { FieldType } from "../types/util";
import { ContactField } from "../util/Enum";
import Model from "./Model";

export class ContactModel extends Model<ContactData> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (contactData: ContactData) {
        super(contactData)
    }

    controlName: (value: string, type: FieldType) => void = (value, type) => {

    }
    controlPhone: (value: string, type: FieldType) => void = (value, type) => {

    }

    controlEmail: (value: string, type: FieldType) => void = (value, type) => {

    }

    controlSubject: (value: string, type: FieldType) => void = (value, type) => {

    }

    controlMessage: (value: string, type: FieldType) => void = (value, type) => {

    }

    controlSubmit: (value: string, type: FieldType) => void = (value, type) => {

    }
    controlForm: ({value, type}: {value: string, type: FieldType}) => void = ({value, type}) => {
        const {NAME, PHONE, EMAIL, SUBJECT, MESSAGE, SUBMIT} = ContactField
        switch (type) {
            case NAME:
                this.controlName(value, type)
                break
            case PHONE:
                this.controlPhone(value, type)
                break
            case EMAIL:
                this.controlEmail(value, type)
                break
            case SUBJECT:
                this.controlSubject(value, type)
                break
            case MESSAGE:
                this.controlMessage(value, type)
                break
            case SUBMIT:
                this.controlSubmit(value, type)
                break
            default:
                break
        }
    }
}