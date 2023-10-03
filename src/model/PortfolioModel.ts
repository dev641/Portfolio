import { HomeModel } from './HomeModel'
import { type ModelData } from '../types/Model'
import { HeaderModel } from './HeaderModel'
import Model from './Model'
import { EducationModel } from './EducationModel'
import { ExperienceModel } from './ExperienceModel'
import { ResumeModel } from './ResumeModel'
import { type ThemeType } from '../types/util'
import ThemeEvent from './ThemeModel'
import modelData from '../Api/ModelApi'
export class PortfolioModel extends Model<ModelData> {
  private readonly header: HeaderModel
  private readonly home: HomeModel
  private readonly experience: ExperienceModel
  private readonly education: EducationModel
  private readonly resume: ResumeModel
  private theme: ThemeType
  constructor () {
    super(modelData)
    this.header = new HeaderModel(this.Data.header)
    this.theme = this.Data.header.theme
    this.home = new HomeModel(this.Data.home)
    this.experience = new ExperienceModel(this.Data.experience)
    this.education = new EducationModel(this.Data.education)
    this.resume = new ResumeModel(this.Data.resume)
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
