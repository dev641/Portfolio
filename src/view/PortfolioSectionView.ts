/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import PortfolioCard from './components/cards/PortfolioCard'
import { type PortfolioData } from '../types/Model'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'
import { type ThemeType, type HtmlUpdator, type HtmlGenerator, ComponentsClassName } from '../types/util'
import { CarsouselBtn } from '../util/Enum'
import { CAROUSEL_CARD_WIDTH, PORTFOLIO_EXPAND_SECTION, PORTFOLIO_SECTION } from '../constant/constant'
import { customElementsGenerators, getScrollYOfSection } from '../util/util'
import { PortfolioExpandView } from './PortfolioExpandView'
import { PortfolioExpandCard } from '../types/cards'
// import portfolioExpandCard from './components/cards/PortfolioExpandCard'

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

const controlBoxShadow = (carouselBtns: NodeListOf<HTMLButtonElement>) => {
  const boxShadows: string[] = []
  carouselBtns.forEach((btn) => {
    boxShadows.push(btn.style.boxShadow)
    btn.style.boxShadow = 'none'
  })
  setTimeout(() => {
    carouselBtns.forEach((btn, index) => {
      btn.style.boxShadow = boxShadows[index]
    })
  }, 0)
}
export class PortfolioSectionView extends View<HTMLDivElement, PortfolioData> {
  private portFolioExpandView: PortfolioExpandView
  constructor (data: PortfolioData, theme: ThemeType) {
    super(PORTFOLIO_SECTION, portfolioGenerator, componentClassNameGenerator(theme))
    this.render(data, theme)
    const expandData = data.data[0].expand
    this.portFolioExpandView = new PortfolioExpandView(expandData, theme)
    // this.components = this.componentGenerator(componentClassNameGenerator(theme))
  }

  moveCarousel (move: CarsouselBtn): void {
    const carousel = document.getElementById(`${PORTFOLIO_SECTION}__body`)! as HTMLDivElement
    const carouselBtns = document.querySelectorAll('.carousel__btn')! satisfies NodeListOf<HTMLButtonElement>
    if (move === CarsouselBtn.RIGHT) {
      carousel.style.transition = 'transform 0s' // Disable transition temporarily
      carousel.style.transform = 'translateX(0)' // Adjust based on item width and spacing
      const firstClone = carousel.firstElementChild!.cloneNode(true)
      carousel.appendChild(firstClone)
      setTimeout(() => {
        carousel.style.transition = 'transform 0.75s ease' // Re-enable transition
        carousel.style.transform = `translateX(-${CAROUSEL_CARD_WIDTH}%)`
        controlBoxShadow(carouselBtns)
        carousel.removeChild(carousel.firstElementChild!)
      }, 0)
    } else {
      const lastClone = carousel.lastElementChild!.cloneNode(true)
      carousel.insertBefore(lastClone, carousel.firstElementChild)
      carousel.style.transition = 'transform 0s' // Disable transition temporarily
      carousel.style.transform = `translateX(-${CAROUSEL_CARD_WIDTH}%)` // Adjust based on item width and spacing
      setTimeout(() => {
        carousel.style.transition = 'transform 0.75s ease' // Re-enable transition
        carousel.style.transform = 'translateX(0)'
        controlBoxShadow(carouselBtns)
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
        if (target.classList.contains('left')) {
          btn = CarsouselBtn.LEFT
        } else if (target.classList.contains('right')) {
          btn = CarsouselBtn.RIGHT
        }
        controlCarousel(btn)
      })
    })
  }

  addPortfolioExpandCardToDOM: (data: PortfolioExpandCard, theme: ThemeType) => void = (data, theme) => {
    const container = document.getElementById('page')! as HTMLDivElement
    const portfolioExpandSection = document.getElementById(`${PORTFOLIO_SECTION}-expand`)! as HTMLDivElement
    this.portFolioExpandView.update(theme, data)
    container.classList.toggle('hidden')
    portfolioExpandSection.classList.toggle('hidden')
  }

  portfolioExpandCardOpenHandler: (controlPortfolioExpandCard: HtmlUpdator) => void = (controlPortfolioExpandCard) => {
    const portfolio = document.querySelector(`#${PORTFOLIO_SECTION}`)! satisfies HTMLDivElement
    portfolio.addEventListener('click', (e: Event) => {
      debugger
      const target = e.target! as HTMLDivElement
      const card = target.closest(`#${PORTFOLIO_SECTION}-card`)! as HTMLDivElement
      const index = Number.parseInt(card.getAttribute('tabindex')!)
      controlPortfolioExpandCard(index)
    })
  }

  portfolioExpandCardCloseHandler: () => void = () => {
    const container = document.getElementById('page')! as HTMLDivElement
    const portfolioExpandSection = document.getElementById(`${PORTFOLIO_SECTION}-expand`)! as HTMLDivElement
    // const closeBtn = document.querySelector(`#${PORTFOLIO_EXPAND_SECTION}`)! satisfies HTMLDivElement
    portfolioExpandSection.addEventListener('click', (e: Event) => {
      debugger
      const target = e.target! as HTMLDivElement
      const closeBtn = target.closest(`#${PORTFOLIO_EXPAND_SECTION}-card__btn-close`)! as HTMLDivElement
      
      if (closeBtn) {
        container.classList.toggle('hidden')
        const scrollPosition = getScrollYOfSection(PORTFOLIO_SECTION)
        window.scrollBy(0, scrollPosition)
        portfolioExpandSection.classList.toggle('hidden')
      }
    })
  }
}
