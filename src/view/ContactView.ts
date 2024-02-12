import { CONTACT } from "../constant/constant";
import { ContactData } from "../types/Model";
import { ComponentsClassName, HtmlGenerator, ThemeType } from "../types/util";
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
export class ContactView extends View<HTMLDivElement, ContactData> {
    constructor(data: ContactData, theme: ThemeType) {
        super(CONTACT, htmlGenerator, componentClassNameGenerator())
        this.render(data, theme)
    }
}