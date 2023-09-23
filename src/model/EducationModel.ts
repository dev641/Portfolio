import Model from './Model'
import { education, heading, subHeading } from '../data/Education/education.json'
import { type EducationData } from '../types/Model'
import { typeChecker } from '../decorator/typeChecker'
// import { type UserDetails, type Date } from '../types/cards'
// @Validate(experience)
export class EducationModel extends Model<EducationData> {
  constructor () {
    const experienceData: EducationData = {
      education: typeChecker(education),
      heading,
      subHeading
    }
    super(experienceData)
  }
}
export default new EducationModel()
