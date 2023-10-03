import { type ResumeData } from '../types/Model'
import Model from './Model'
import { type ThemeType } from '../types/util'
import ThemeEvent from './ThemeModel'
import { ThemeEnum } from './Enum'

export class ResumeModel extends Model<ResumeData> {
  private theme: ThemeType = ThemeEnum.dark
  constructor (resumeData: ResumeData) {
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
