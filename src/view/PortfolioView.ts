import { HeaderView } from './HeaderView'
import { type ModelData } from '../types/Model'
export class PortfolioView {
  private readonly headerView: HeaderView
  constructor (data: ModelData) {
    this.headerView = new HeaderView(data.header)
  }

  get HeaderView (): HeaderView {
    return this.headerView
  }
}
