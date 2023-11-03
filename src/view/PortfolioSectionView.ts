/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import PortfolioCard from './components/cards/PortfolioCard'
import { type PortfolioData } from '../types/Model'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'
import { type ThemeType, type HtmlUpdator, type HtmlGenerator } from '../types/util'
import { CarsouselBtn } from '../util/Enum'
import { CAROUSEL_CARD_WIDTH } from '../constant/constant'

const portfolioGenerator: HtmlGenerator = ({ data, sectionHeader: sectionHeaderData }: PortfolioData) => {
  const carousel = data.map((data, ind) => PortfolioCard(data.portfolio, ind)).join('')
  return `
     ${sectionHeader(sectionHeaderData)}
     <i class="left bi bi-arrow-left carousel__btn"></i>
     <div class="portfolio__body" id="portfolio__body">
      ${carousel}
      </div>
      <i class="right bi bi-arrow-right carousel__btn"></i>
    `
}

export class PortfolioSectionView extends View<HTMLDivElement, PortfolioData> {
  constructor (data: PortfolioData, theme: ThemeType) {
    super('portfolio', portfolioGenerator)
    this.render(data, theme)
  }

  moveCarousel (move: CarsouselBtn): void {
    const carousel = document.getElementById('portfolio__body')! as HTMLDivElement
    debugger
    if (move === CarsouselBtn.RIGHT) {
      carousel.style.transition = 'transform 0s' // Disable transition temporarily
      carousel.style.transform = 'translateX(0)' // Adjust based on item width and spacing
      const firstClone = carousel.firstElementChild!.cloneNode(true)
      carousel.appendChild(firstClone)
      setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease' // Re-enable transition
        carousel.style.transform = `translateX(-${CAROUSEL_CARD_WIDTH}%)`
        carousel.removeChild(carousel.firstElementChild!)
      }, 0)
    } else {
      const lastClone = carousel.lastElementChild!.cloneNode(true)
      carousel.insertBefore(lastClone, carousel.firstElementChild)
      carousel.style.transition = 'transform 0s' // Disable transition temporarily
      carousel.style.transform = `translateX(-${CAROUSEL_CARD_WIDTH}%)` // Adjust based on item width and spacing
      setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease' // Re-enable transition
        carousel.style.transform = 'translateX(0)'
        carousel.removeChild(carousel.lastElementChild!)
      }, 0)
    }
  }

  carouselHandler: (controlCarousel: HtmlUpdator) => void = (controlCarousel) => {
    const html = document.querySelector('#portfolio')! satisfies HTMLDivElement
    html.addEventListener('click', (e: Event) => {
      let target = e.target as HTMLDivElement
      target = target.closest('.carousel__btn')!
      // // eslint-disable-next-line no-debugger
      // debugger
      if (target !== null) {
        let btn
        if (target.classList.contains('left')) {
          btn = CarsouselBtn.LEFT
        } else if (target.classList.contains('right')) {
          btn = CarsouselBtn.RIGHT
        }
        controlCarousel(btn)
      }
    })
  }
}
