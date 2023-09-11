import { type BioCardInfo, type BioCard, type render } from '../../../types/cards'

const tableGenerator: render = (data: BioCardInfo) => {
  interface t { logoClass: string[], name: string }
  const tableRow = Object.values(data).map(({ logoClass, name }: t) => ` <tr class="bio-card__details-row" id="bio-card__details-row">
         <td class="bio-card__details-row__logo" id="bio-card__details-row__logo"><i class="${logoClass.join(' ')}"></i></td>
         <td class="bio-card__details-row__descriptions" id="bio-card__details-row__descriptions">${name}</td>
       </tr>
   `).join('')
  return tableRow
}
const bioCard: render = ({ logo: { logoClass }, name, description, info }: BioCard) => {
  return `
          <div class="bio-card card dark-card" id="bio-card">
            <div class="bio-card__icon" id="bio-card__icon">
              <div class="bio-card__icon-inner" id="bio-card__icon-inner">
                <i class="${logoClass.join(' ')}"></i>
              </div>
            </div>
            <h2 class="bio-card__heading" id="bio-card__heading">${"Hi, I'm"} <span>${name}</span></h2>
            <h4 class="bio-card__description" id="bio-card__description">${description}</h4>
            <table class="bio-card__details" id="bio-card__details">
              ${tableGenerator(info)}
            </table>
          </div>
  `
}

export default bioCard
