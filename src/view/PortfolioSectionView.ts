/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import PortfolioCard from './components/cards/PortfolioCard'
import { type PortfolioData } from '../types/Model'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'
import { type ThemeType, type HtmlUpdator, type HtmlGenerator, ComponentsClassName } from '../types/util'
import { CarsouselBtn } from '../util/Enum'
import { CAROUSEL_CARD_WIDTH, PORTFOLIO_SECTION } from '../constant/constant'
import { customElementsGenerators } from '../util/util'

const portfolioGenerator: HtmlGenerator = ({ data, sectionHeader: sectionHeaderData }: PortfolioData, _: ThemeType) => {
  const carousel = data.map((data, ind) => PortfolioCard(data.portfolio, ind)).join('')
  return `
     ${sectionHeader(sectionHeaderData)}
     <div class="${PORTFOLIO_SECTION}__body" id="${PORTFOLIO_SECTION}__body">
      ${carousel}
      </div>
    `
}

const componentClassNameGenerator: (theme: ThemeType) => ComponentsClassName = (theme) => {
  return {
    btns: `#${PORTFOLIO_SECTION} .button`,
    cards: `#${PORTFOLIO_SECTION} .${PORTFOLIO_SECTION}-card`,
    elements: customElementsGenerators({container: PORTFOLIO_SECTION, theme})?.map(ele => ele.name)
  }
}
export class PortfolioSectionView extends View<HTMLDivElement, PortfolioData> {
  constructor (data: PortfolioData, theme: ThemeType) {
    super(PORTFOLIO_SECTION, portfolioGenerator, componentClassNameGenerator(theme))
    this.render(data, theme)
    // this.components = this.componentGenerator(componentClassNameGenerator(theme))
  }

  moveCarousel (move: CarsouselBtn): void {
    const carousel = document.getElementById(`${PORTFOLIO_SECTION}__body`)! as HTMLDivElement
    debugger
    if (move === CarsouselBtn.RIGHT) {
      carousel.style.transition = 'transform 0s' // Disable transition temporarily
      carousel.style.transform = 'translateX(0)' // Adjust based on item width and spacing
      const firstClone = carousel.firstElementChild!.cloneNode(true)
      carousel.appendChild(firstClone)
      setTimeout(() => {
        carousel.style.transition = 'transform 1s ease' // Re-enable transition
        carousel.style.transform = `translateX(-${CAROUSEL_CARD_WIDTH}%)`
        carousel.removeChild(carousel.firstElementChild!)
      }, 0)
    } else {
      const lastClone = carousel.lastElementChild!.cloneNode(true)
      carousel.insertBefore(lastClone, carousel.firstElementChild)
      carousel.style.transition = 'transform 0s' // Disable transition temporarily
      carousel.style.transform = `translateX(-${CAROUSEL_CARD_WIDTH}%)` // Adjust based on item width and spacing
      setTimeout(() => {
        carousel.style.transition = 'transform 1s ease' // Re-enable transition
        carousel.style.transform = 'translateX(0)'
        carousel.removeChild(carousel.lastElementChild!)
      }, 0)
    }
  }

  carouselHandler: (controlCarousel: HtmlUpdator) => void = (controlCarousel) => {
    const arrowBtns = document.querySelectorAll('.carousel__btn')! satisfies NodeListOf<Element>
    arrowBtns.forEach(arrow => {
      arrow.addEventListener('click', (e: Event) => {
        let btn
        const target = e.target! as HTMLElement
        debugger
        if (target.classList.contains('left')) {
          btn = CarsouselBtn.LEFT
        } else if (target.classList.contains('right')) {
          btn = CarsouselBtn.RIGHT
        }
        controlCarousel(btn)
      })
    })
  }
}
