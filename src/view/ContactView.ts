import { CONTACT, CONTACT_FORM } from "../constant/constant";
import { Autobind, FormatInputValue } from "../decorator/Utils";
import { ContactData } from "../types/Model";
import { ComponentsClassName, HtmlGenerator, HtmlUpdator, InputHandler, ThemeType } from "../types/util";
import { ContactField } from "../util/Enum";
import contactDetailsCard from "./components/cards/ContactDetail";
import contactFormCard from "./components/cards/ContactForm";
import sectionHeader from "./components/cards/SectionHeader";
import View from "./view";

const componentClassNameGenerator: () => ComponentsClassName = () => {
  return {
    btns: `#${CONTACT} .button`,
    cards: `#${CONTACT} .card`
  }
}

const htmlGenerator: HtmlGenerator = ({sectionHeader: sectionHeaderData, contactDetails, contactForm}: ContactData, theme: ThemeType) => {
    return `${sectionHeader(sectionHeaderData)}
    <div class="contact-cards" id="contact-cards">
        ${contactDetailsCard(contactDetails, theme)}${contactFormCard(contactForm, theme)}
    </div>`

}

const formHandler: InputHandler  = (event, controlForm, type) => {
    const data = {
        value: '',
        type
    }
    if (event instanceof SubmitEvent) {
        debugger
        // const submitter = event.submitter as HTMLButtonElement
        data.value = Object.assign({},...Object.values(ContactField).map((value) => {   debugger
            const target = (Array.from((event.target as HTMLFormElement).elements)
                            .filter(elem => elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') as HTMLInputElement[] | HTMLTextAreaElement[]).filter(elem => elem.name === value) as HTMLInputElement[] | HTMLTextAreaElement[]
            return {
                [value]: target[0]?.value ?? ''
            }
        }))
    } else {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement
        data.value = target.value
    }
    controlForm!(data)
}
export class ContactView extends View<HTMLDivElement, ContactData> {
    constructor(data: ContactData, theme: ThemeType) {
        super(CONTACT, htmlGenerator, componentClassNameGenerator())
        this.render(data, theme)
    }

    nameFormatHandler: InputHandler = (event, controlName) => {
        formHandler(event, controlName, ContactField.NAME)
    }
    
    @FormatInputValue(ContactField.PHONE)
    phoneNumberFormatHandler(
    event: Event,
    controlPhoneNumber: HtmlUpdator
  ): void {
    const target = event.target as HTMLInputElement;
    const digitCount = (target.value.match(/\d/g) || []).length;
    if (digitCount !== 11 && digitCount !== 12) {
        target.setCustomValidity('Phone number must contain exactly 10 digits excluding the country code.')
    } else {
        target.setCustomValidity('')
    }
    target.reportValidity()
    formHandler(event, controlPhoneNumber, ContactField.PHONE);
  }

    @FormatInputValue(ContactField.EMAIL)
    emailFormatHandler(event: Event, controlEmail: HtmlUpdator): void {
       formHandler(event, controlEmail,  ContactField.EMAIL)
    }

    subjectFormatHandler(event: Event, controlSubject: HtmlUpdator): void {
        formHandler(event,controlSubject, ContactField.SUBJECT)
    }

    messageFormatHandler(event: Event, controlMessage: HtmlUpdator): void {
        formHandler(event,controlMessage, ContactField.MESSAGE)
    }

    submitHandler(event: Event, controlSubmit: HtmlUpdator): void {
        debugger
        formHandler(event, controlSubmit, ContactField.SUBMIT)
    }
    @Autobind
    contactInputHandler(event: Event, controlInputHandler: HtmlUpdator) : void {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement
        const {NAME, PHONE, EMAIL, SUBJECT, MESSAGE} = ContactField
        switch (target.name) {
            case NAME:
                this.nameFormatHandler(event, controlInputHandler)
                break
            case PHONE:
                this.phoneNumberFormatHandler(event, controlInputHandler!)
                break
            case EMAIL:
                this.emailFormatHandler(event, controlInputHandler)
                break
            case SUBJECT:
                this.subjectFormatHandler(event, controlInputHandler)
                break
            case MESSAGE:
                this.messageFormatHandler(event, controlInputHandler)
                break
            default:
                break
        }

    }

    @Autobind
    contactSubmitHandler(event: Event, controlSubmitHandler: HtmlUpdator) : void {
        event.preventDefault()
        debugger
        if (event instanceof SubmitEvent)  {
            const submitter = event.submitter as HTMLButtonElement //eslint-disable-line
            switch (submitter.name) {
                case ContactField.SUBMIT:
                    this.submitHandler(event, controlSubmitHandler)
                    break
                default:
                    break
            }
        }
    }

    events = {
        input: this.contactInputHandler,
        submit: this.contactSubmitHandler
    }

    initiateListener: (controlForm: HtmlUpdator) => void = (controlForm) => {
        const contactForm = document.getElementById(CONTACT_FORM) as HTMLFormElement

        Object.entries(this.events).forEach(([eventName, eventHandler]) => {
            contactForm.addEventListener(eventName,(event: Event) => {
                eventHandler(event, controlForm)
            })
        })
    }

}