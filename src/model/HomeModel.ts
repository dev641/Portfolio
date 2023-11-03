import { type HomeData } from '../types/Model'
import Model from './Model'
export class HomeModel extends Model<HomeData> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (homeData: HomeData) {
    super(homeData)
  }
}
