import Model from './Model'
import { type EducationData } from '../types/Model'
export class EducationModel extends Model<EducationData> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (experienceData: EducationData) {
    super(experienceData)
  }
}
