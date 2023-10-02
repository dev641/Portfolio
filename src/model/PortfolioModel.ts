import Home, { type HomeModel } from './HomeModel'
import { type ModelData } from '../types/Model'
import Header, { type HeaderModel } from './HeaderModel'
import Model from './Model'
import Education, { type EducationModel } from './EducationModel'
import Experience, { type ExperienceModel } from './ExperienceModel'
import Resume, { type ResumeModel } from './ResumeModel'
import { type ThemeType } from '../types/util'
import ThemeEvent from './ThemeModel'

export class PortfolioModel extends Model<ModelData> {
  private readonly header: HeaderModel
  private readonly home: HomeModel
  private readonly experience: ExperienceModel
  private readonly education: EducationModel
  private readonly resume: ResumeModel
  private theme: ThemeType
  constructor () {
    const header = Header.Data
    const home = Home.Data
    const experience = Experience.Data
    const education = Education.Data
    const resume = Resume.Data
    // const  = .Data
    // const home = Home.Data
    super({
      header,
      home,
      experience,
      education,
      resume
    })
    this.header = Header
    this.theme = Header.Data.theme
    this.home = Home
    this.experience = Experience
    this.education = Education
    this.resume = Resume
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

  get Header (): HeaderModel {
    return this.header
  }

  get Home (): HomeModel {
    return this.home
  }

  get Experience (): ExperienceModel {
    return this.experience
  }

  get Education (): EducationModel {
    return this.education
  }

  get Resume (): ResumeModel {
    return this.resume
  }
}

export default new PortfolioModel()
