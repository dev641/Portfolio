import { type ResumeData } from '../types/Model'
import Model from './Model'

export class ResumeModel extends Model<ResumeData> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (resumeData: ResumeData) {
    super(resumeData)
  }

  changeStatus (name: string): void {
    const { btns } = this.Data
    if (btns.ee.name === name) {
      btns.ee.status = 'active'
      btns.skills.status = ''
    } else {
      btns.ee.status = ''
      btns.skills.status = 'active'
    }
    const data = { ...this.Data, btns }
    this.Data = data
  }
}
