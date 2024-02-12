import { ContactForm, formInput, render } from "../../../types/cards";

{{
      // Here is a reference snippet of code from src\view\components\cards\CvCard.ts:
//
// import { type CvCard } from './../../../types/cards.d'
// import { type render } from '../../../types/cards'
//
// const cvCard: render = ({ heading, download, contact }: CvCard) => {
//   return `
//     <div class="cv-card card dark-card" id="cv-card">
//       <p class="heading cv-card__heading" id="cv-card__heading">${heading}</p>
//         <a href="${download.src}" download="${download.extension}" class="cv-card__download btn" id="cv-card__download">${download.name}</a>
//         <a href="${contact.src}" class="cv-card__contact-me btn" id="cv-card__contact-me">${contact.name}</a>
//     </div>
//   `
// }
//
// export default cvCard
//
//
// Here is a reference snippet of code from src\types\cards.d.
}}
const fieldGenerator = ({label, type, element, required, placeholder, pattern}: formInput) => {
    return element !== 'button' 
            ? `<div class="contact-form__${label} form-field" id="contact-form__${label}">
                <label for="contact-form__${label}-input" class="contact-form__${label}-label" id="contact-form__${label}-label">${label}</label>
                <${element} ${required ? required : ''} placeholder="${placeholder}" ${pattern ? `pattern="${pattern.toString().slice(1, -1)}"`: ''} type="${type}" id="contact-form__${label}-input" class="contact-form__${label}-input">${element === 'textarea'? `</${element}>` : ''}
              </div>`
            : 
              `<div class="contact-form__${label} form-field" id="contact-form__${label}">
                <${element} type="${type}" class="contact-form__${label}-btn btn" id="contact-form__${label}-btn">${label}</${element}>
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