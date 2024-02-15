import { CONTACT, CONTACT_FORM } from "../constant/constant";
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

const formHandler: InputHandler  = (event, type, controlForm) => {
    const data = {
        value: '',
        type
    }
    if (event instanceof SubmitEvent) {
        const submitter = event.submitter as HTMLButtonElement
        data.value = submitter.value
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

    nameFormatHandler: (event: Event, controlName: HtmlUpdator) => void = (event, controlName) => {
        formHandler(event, ContactField.NAME, controlName)
    }

    phoneNumberFormatHandler: (event: Event, controlPhoneNumber: HtmlUpdator) => void = (event, controlPhoneNumber) => {
        formHandler(event, ContactField.PHONE, controlPhoneNumber)
    }

    emailFormatHandler: (event: Event, controlEmail: HtmlUpdator) => void = (event, controlEmail) => {
       formHandler(event, ContactField.EMAIL, controlEmail)
    }

    subjectFormatHandler: (event: Event, controlSubject: HtmlUpdator) => void = (event, controlSubject) => {
        formHandler(event, ContactField.SUBJECT, controlSubject)
    }

    messageFormatHandler: (event: Event, controlMessage: HtmlUpdator) => void = (event, controlMessage) => {
        formHandler(event, ContactField.MESSAGE, controlMessage)
    }

    submitHandler: (event: Event, controlSubmit: HtmlUpdator) => void = (event, controlSubmit) => {
        formHandler(event, ContactField.MESSAGE, controlSubmit)
    }

    contactInputHandler: (event: Event, controlInputHandler: HtmlUpdator) => void = (event, controlInputHandler) => {
        debugger
        const target = event.target as HTMLInputElement | HTMLTextAreaElement
        const {NAME, PHONE, EMAIL, SUBJECT, MESSAGE} = ContactField
        switch (target.name) {
            case NAME:
                this.nameFormatHandler(event, controlInputHandler)
                break
            case PHONE:
                this.phoneNumberFormatHandler(event, controlInputHandler)
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

    contactSubmitHandler: (event: Event, controlSubmitHandler: HtmlUpdator) => void = (event, controlSubmitHandler) => {
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
        input: this.contactInputHandler.bind(this),
        submit: this.contactSubmitHandler.bind(this)
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