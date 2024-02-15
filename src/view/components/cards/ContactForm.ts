import { ContactForm, formInput, render } from "../../../types/cards";
const fieldGenerator: (data: formInput) => string = ({label, type, element, required, placeholder, pattern}: formInput) => {
    return element !== 'button' 
            ? `<div class="contact-form__${label} form-field" id="contact-form__${label}">
                <label for="contact-form__${label}-input" class="contact-form__${label}-label" id="contact-form__${label}-label">${label}</label>
                <${element} ${required ?? ''} placeholder="${placeholder}" name="${label}" ${pattern ? `pattern="${pattern.toString().slice(1, -1)}"`: ''} type="${type}" id="contact-form__${label}-input" class="contact-form__${label}-input">${element === 'textarea' ? `</${element}>` : ''}
              </div>`
            : 
              `<div class="contact-form__${label} form-field" id="contact-form__${label}">
                <${element} type="${type}" name="${label}" class="contact-form__${label}-btn btn" id="contact-form__${label}-btn">${label}</${element}>
              </div>`
}
// ${fieldGenerator({...name})}
//               ${fieldGenerator({...phone})}
//               ${fieldGenerator({...email})}
//               ${fieldGenerator({...subject})}
//               ${fieldGenerator({...message})}
//               ${fieldGenerator({...submit})}
const contactFormCard: render = (fields: ContactForm, theme) => {
    console.log(Object.values(fields).map((fieldValue) =>  fieldGenerator({...fieldValue})).join(''))
    return ` <form class="contact-form card ${theme}-card" id="contact-form" action="/" method="post">
              ${Object.values(fields).map((fieldValue) =>  fieldGenerator({...fieldValue})).join('')}
            </form>
        `
}

export default contactFormCard