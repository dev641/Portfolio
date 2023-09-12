import Home, { type HomeModel } from './HomeModel'
import { type ModelData } from '../types/Model'
import Header, { type HeaderModel } from './HeaderModel'
import Model from './Model'

export class PortfolioModel extends Model<ModelData> {
  private readonly header: HeaderModel
  private readonly home: HomeModel
  constructor () {
    const header = Header.Data
    const home = Home.Data
    super({
      header,
      home
    })
    this.header = Header
    this.home = Home
  }

  get Header (): HeaderModel {
    return this.header
  }

  get Home (): HomeModel {
    return this.home
  }
}

export default new PortfolioModel()
