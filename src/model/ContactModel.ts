import { sendEmail } from "../Api/Contact/ContactFormAction";
import { Validate } from "../decorator/Utils";
import { type ContactData } from "../types/Model";
import { FieldType } from "../types/util";
import { ContactField } from "../util/Enum";
import Model from "./Model";

export class ContactModel extends Model<ContactData> {
    private name: string = ""
    private phone: string = ""
    private email: string = ""
    private subject: string = ""
    private message: string = ""
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (contactData: ContactData) {
        super(contactData)
    }

    private get Name (): string {
        return this.name
    }

    private set Name (value: string) {
        this.name = value
    }

    @Validate(ContactField.PHONE)
    private get Phone (): string {
        return this.phone
    }
    private set Phone (value: string) {
        this.phone = value
    }

    private get Email (): string {  
        return this.email
    }

    @Validate(ContactField.EMAIL)
    private set Email (value: string) { 
        this.email = value
    }

    private get Subject (): string {
        return this.subject
    }

    private set Subject (value: string) {
        this.subject = value
    }

    private get Message (): string {
        return this.message
    }

    private set Message (value: string) {
        this.message = value
    }

    private updateName(value: string): void {
        this.Name = value
    }
    private updatePhone(value: string): void {
        this.Phone = value
    }

    private updateEmail(value: string): void {
        this.Email = value
    }

    private updateSubject(value: string): void {
        this.Subject = value
    }

    private updateMessage(value: string): void {
        this.Message = value
    }

    private submit(value: Object): void {
        const {NAME, PHONE, EMAIL, SUBJECT, MESSAGE} = ContactField
        Object.entries(value).forEach(([key, value]) => {
            switch(key) {
                case NAME:
                    this.updateName(value)
                    break
                case PHONE:
                    this.updatePhone(value)
                    break
                case EMAIL:
                    this.updateEmail(value)
                    break
                case SUBJECT:
                    this.updateSubject(value)
                    break
                case MESSAGE:
                    this.updateMessage(value)
                    break
                default:
                    break
            }
        })
       sendEmail({name: this.Name,phone: this.Phone,email: this.Email,subject: this.Subject,message: this.Message})
       .then((res) => {
        console.log(res)
        alert('Your message has been sent!')
       }).catch((err) => {
        console.error(err)
        alert('Something went wrong...')
       })
    }

    updateForm({value, type}: {value: string | Object, type: FieldType}): void {
        const {NAME, PHONE, EMAIL, SUBJECT, MESSAGE, SUBMIT} = ContactField
        switch (type) {
            case NAME:
                if (typeof value ==='string') {
                    this.updateName(value)
                }
                break
            case PHONE:
                if (typeof value ==='string') {
                this.updatePhone(value)
                }
                break
            case EMAIL:
                if (typeof value ==='string') {
                    this.updateEmail(value)
                }
                break
            case SUBJECT:
                if(typeof value ==='string') {
                    this.updateSubject(value)
                }
                break
            case MESSAGE:
                if(typeof value ==='string') {
                    this.updateMessage(value)
                }
                break
            case SUBMIT:
                if(typeof value === 'object') {
                    this.submit(value)
                }
                break
            default:
                break
        }
    }
}