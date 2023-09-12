import { type HomeData } from '../types/Model'
import Model from './Model'
import { bio, CV, image } from '../data/Home/Home.json'
export class HomeModel extends Model<HomeData> {
  constructor () {
    const homeData: HomeData = {
      bio,
      CV,
      image
    }
    super(homeData)
  }
}

export default new HomeModel()
