import Model from './Model'
import { type ExperienceData } from '../types/Model'
// import { type UserDetails, type Date } from '../types/cards'
export class ExperienceModel extends Model<ExperienceData> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (experienceData: ExperienceData) {
    super(experienceData)
  }
}
