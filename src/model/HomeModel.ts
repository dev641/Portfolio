import { type HomeData } from '../types/Model'
import Model from './Model'
import { bio, CV, image } from '../data/Home/Home.json'
export class HomeModel extends Model<HomeData> {
  constructor () {
    super({
      bio,
      CV,
      image
    } satisfies HomeData)
  }
}

export default new HomeModel()
