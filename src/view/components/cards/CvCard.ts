import { type CvCard } from './../../../types/cards.d'
import { type render } from '../../../types/cards'

const cvCard: render = ({ heading, download, contact }: CvCard) => {
  return `
    <div class="cv-card card dark-card" id="cv-card">
      <p class="heading cv-card__heading" id="cv-card__heading">${heading}</p>
        <a href="${download.src}" download=${download.extension} class="cv-card__download btn" id="cv-card__download">${download.name}</a>
        <a href="${contact.src}" class="cv-card__contact-me btn" id="cv-card__contact-me">${contact.name}</a>
    </div>
  `
}

export default cvCard
