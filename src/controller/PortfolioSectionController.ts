import { type PortfolioSectionModel } from '../model/PortfolioSectionModel'
import { type PortfolioData } from '../types/Model'
import { type ThemeFinder } from '../types/util'
import { type CarsouselBtn } from '../util/Enum'
import { type PortfolioSectionView } from '../view/PortfolioSectionView'
import { Controller } from './Controller'

export class PortfolioSectionController extends Controller<PortfolioSectionModel, PortfolioSectionView, PortfolioData, HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (model: PortfolioSectionModel, view: PortfolioSectionView, themeFinder: ThemeFinder) {
    super(model, view, themeFinder)
    this.View.carouselHandler(this.controlCarousel.bind(this))
    this.View.portfolioExpandCardOpenHandler(this.controlPortfolioExpand.bind(this))
    this.View.portfolioExpandCardCloseHandler(this.controlPortfolioExpand.bind(this))
  }

  controlCarousel (move: CarsouselBtn): void {
    this.Model.changeCarouselFromAndTo(move)
    this.View.moveCarousel(move)
  }

  controlPortfolioExpand ({index, likeBtn}: {index: number, likeBtn: boolean}): void {
    const theme = this.ThemeFinder()
    if (index !== -1) {
      if (likeBtn) {
        this.Model.updateLike(index)
        this.View.update(theme,this.Model.Data)
        this.View.updatePortfolioExpandView(theme, this.Model.getPortfolioExpandData(index))
      } else {
        const data = this.Model.getPortfolioExpandData(index)
        this.View.addPortfolioExpandCardToDOM(data, theme)
      }
    }
  }
}
