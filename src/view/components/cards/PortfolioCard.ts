import { type PortfolioCard, type render } from '../../../types/cards'

const portfolioCard: render = ({ heading, likes: { number, name: { logoClass } }, image: { name: imageName, src }, skillSet }: PortfolioCard) => {
  return `
    <div class="portfolio-card card dark-card" id="portfolio-card">
          <div class="portfolio-card__image" id="portfolio-card__image">
            <img src="${src}" alt="${imageName}-image">
          </div>
          <div class="portfolio-card__main-skill" id="portfolio-card__main-skill">${skillSet[0]}</div>
          <div class="portfolio-card__likes" id="portfolio-card__likes"><i class="${logoClass.join(' ')}"></i>${number}</div>
          <div class="portfolio-card__heading" id="portfolio-card__heading">${heading}</div>
        </div>
  `
}

export default portfolioCard
