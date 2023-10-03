import { type HomeData } from '../types/Model'
import Model from './Model'
// import { bio, CV, image } from '../data/Home/Home.json'
import {} from '../Api/ModelApi'
export class HomeModel extends Model<HomeData> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (homeData: HomeData) {
    super(homeData)
  }
}

// export default new HomeModel()
