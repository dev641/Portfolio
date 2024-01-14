import { CarsouselBtn } from './../util/Enum'
import { CAROUSEL_SIZE } from '../constant/constant'
import { type PortfolioData } from '../types/Model'
import { type PortfolioExpandCard } from '../types/cards'
import Model from './Model'


const generateUpdatedList: (options: {logoClass: string[]}) => string[] = ({logoClass}) => {
  return logoClass.map((className:string) => {
      if (className.startsWith('bi-') && !className.endsWith('-fill') && className.length > 3) {
        className = className + '-fill'
      }
      return className
    })
}
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

  updateLike (index: number): void {
    const {likeBtn} = {...this.Data.data[index].portfolio}
    const {likeBtn: expandLike} = {...this.Data.data[index].expand}
    likeBtn.number+=1
    likeBtn.name.logoClass = generateUpdatedList({logoClass: likeBtn.name.logoClass})
    expandLike.name.logoClass = generateUpdatedList({logoClass: expandLike.name.logoClass })
    this.Data.data[index].portfolio.likeBtn = {...likeBtn}
    this.Data.data[index].expand.likeBtn = {...expandLike}
  }

  getPortfolioExpandData (ind: number): PortfolioExpandCard {
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
