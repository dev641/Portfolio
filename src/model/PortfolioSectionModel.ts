import { CarsouselBtn } from './../util/Enum'
import { CAROUSEL_SIZE } from '../constant/constant'
import { type PortfolioData } from '../types/Model'
import { type PortfolioExpandCard } from '../types/cards'
import Model from './Model'

export class PortfolioSectionModel extends Model<PortfolioData> {
  private from: number
  private to: number
  private readonly carouselData: PortfolioData
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (portfolioData: PortfolioData) {
    super(portfolioData)
    this.from = 0
    this.to = CAROUSEL_SIZE
    this.carouselData = { ...portfolioData }
    this.updateCarousel()
  }

  get CarouselData (): PortfolioData {
    return this.carouselData
  }

  updateCarousel (move = -1): void {
    if (move !== -1) {
      const { data } = this.Data
      this.carouselData.data = this.From <= this.To ? data.slice(this.From, this.To) : data.slice(this.From).concat(data.slice(0, this.To))
    } else this.carouselData.data = this.Data.data.slice(this.From, this.To)
  }

  get From (): number {
    return this.from
  }

  set From (from: number) {
    const length = this.Data.data.length
    this.from = (length + from) % length
  }

  set To (to: number) {
    const length = this.Data.data.length
    this.to = (length + to) % length
  }

  get To (): number {
    return this.to
  }

  getPortfolioExpandData (ind: number): PortfolioExpandCard {
    debugger
    return this.Data.data[ind].expand
  }

  changeCarouselFromAndTo (btn: CarsouselBtn): void {
    // eslint-disable-next-line no-debugger
    if (btn === CarsouselBtn.LEFT) {
      this.From = this.From - 1
      this.To = this.To - 1
    } else if (btn === CarsouselBtn.RIGHT) {
      this.From = this.From + 1
      this.To = this.To + 1
    }
    this.updateCarousel(btn)
  }
}
