import { ContactDetails, render } from "../../../types/cards";
import { formatPhoneNumber } from "../../../util/util";

const contactDetailsCard: render = ({
    image,
    name,
    designation,
    email,
    phone,
    socialConnects,
    summary
 }: ContactDetails, theme) => {
    const socialConnectsHtml = socialConnects.map(({src, name}) => `<div class="contact-details__social-media-item icon" id="contact-details__social-media-item">
                  <img src="${src}" alt="${name}-image" class="contact-details__social-media-item__image" id="contact-details__social-media-item__image">
                </div>`).join('')
    return `<div class="contact-details card ${theme}-card" id="contact-details">
            <div class="contact-details__image" id="contact-details__image">
                <img src="${image.src}" alt="${image.name}" class="contact-details__image__image" id="contact-details__image__image">
            </div>
              <h5 class="contact-details__heading" id="contact-details__heading">${name}</h5>
              <h6 class="contact-details__designation" id="contact-details__designation">${designation}</h6>
              <h6 class="contact-details__summary" id="contact-details__summary">${summary}</h6>
              <div class="contact-details__contact-info" id="contact-details__contact-info">
                <div class="contact-details__contact-info-email" id="contact-details__contact-info-email">Email: <span>${email}</span></div>
                <div class="contact-details__contact-info-phone" id="contact-details__contact-info-phone">Phone: <span>${formatPhoneNumber(phone)}</span></div>
              </div>
              <div class="contact-details__social-media-heading" id="contact-details__social-media-heading">Find With Me</div>
              <div class="contact-details__social-media" id="contact-details__social-media">
                ${socialConnectsHtml}
              </div>
            </div>`
}

export default contactDetailsCard