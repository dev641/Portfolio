import Model from './Model'
import { heading, subHeading, experience } from '../data/Experience/experience.json'
import { type ExperienceData } from '../types/Model'
import { typeChecker } from '../decorator/typeChecker'
// import { type UserDetails, type Date } from '../types/cards'
export class ExperienceModel extends Model<ExperienceData> {
  constructor () {
    const experienceData: ExperienceData = {
      experience: typeChecker(experience),
      heading,
      subHeading
    }
    super(experienceData)
  }
}
export default new ExperienceModel()
