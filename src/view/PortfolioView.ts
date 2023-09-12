import { HeaderView } from './HeaderView'
import { type ModelData } from '../types/Model'
import { HomeView } from './HomeView'
export class PortfolioView {
  private readonly header: HeaderView
  private readonly home: HomeView
  constructor (data: ModelData) {
    this.header = new HeaderView(data.header)
    this.home = new HomeView(data.home)
  }

  get Header (): HeaderView {
    return this.header
  }

  get Home (): HomeView {
    return this.home
  }
}
