import { type ResumeData } from '../types/Model'
import Model from './Model'
import { heading, subHeading, education, experience, btns } from '../data/Resume/resume.json'
import { typeChecker } from '../decorator/typeChecker'
import { type ThemeType } from '../types/util'
import ThemeEvent from './ThemeModel'
import { ThemeEnum } from './Enum'

export class ResumeModel extends Model<ResumeData> {
  private theme: ThemeType = ThemeEnum.dark
  constructor () {
    const resumeData: ResumeData = {
      heading,
      subHeading,
      btns,
      education: {
        heading: education.heading,
        timeLine: education.timeLine,
        resume: typeChecker(education.resumes)
      },
      experience: {
        heading: experience.heading,
        timeLine: experience.timeLine,
        resume: typeChecker(experience.resumes)
      }
    }
    super(resumeData)
    ThemeEvent.subscribe(this.changeTheme.bind(this))
  }

  set Theme (theme: ThemeType) {
    this.theme = theme
  }

  get Theme (): ThemeType {
    return this.theme
  }

  changeTheme (theme: ThemeType): void {
    this.Theme = theme
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
export default new ResumeModel()
