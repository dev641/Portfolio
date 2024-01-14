import { type PortfolioCard, type render } from '../../../types/cards'
import { ThemeType } from '../../../types/util'

const portfolioCard: render = ({ heading, likeBtn: { number, name: { logoClass } }, image: { name: imageName, src }, skillSet }: PortfolioCard,theme?: ThemeType,  ind?: number) => {
  return `
    <div class="portfolio-card card ${theme}-card" id="portfolio-card" tabindex="${ind}">
          <div class="portfolio-card__image" id="portfolio-card__image">
            <img src="${src}" alt="${imageName}-image">
          </div>
          <div class="portfolio-card__main-skill main-skills" id="portfolio-card__main-skill">${skillSet[0].name}</div>
          <div class="portfolio-card__likes" id="portfolio-card__likes"><i class="${logoClass.join(' ')}" data-isclicked="false"></i>${number}</div>
          <div class="portfolio-card__heading" id="portfolio-card__heading">${heading}</div>
        </div>
  `
}

export default portfolioCard
