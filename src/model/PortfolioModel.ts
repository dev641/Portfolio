import { HomeModel } from './HomeModel'
import { type ModelData } from '../types/Model'
import { HeaderModel } from './HeaderModel'
import Model from './Model'
import { EducationModel } from './EducationModel'
import { ExperienceModel } from './ExperienceModel'
import { ResumeModel } from './ResumeModel'
import { type ThemeType } from '../types/util'
import modelData, { Theme } from '../Api/ModelApi'
import { PortfolioSectionModel } from './PortfolioSectionModel'
export class PortfolioModel extends Model<ModelData> {
  private readonly header: HeaderModel
  private readonly home: HomeModel
  private readonly experience: ExperienceModel
  private readonly education: EducationModel
  private readonly resume: ResumeModel
  private readonly portfolio: PortfolioSectionModel
  private theme: ThemeType
  constructor (data: ModelData, theme: ThemeType) {
    super(data)
    this.header = new HeaderModel(this.Data.header)
    this.theme = theme
    this.home = new HomeModel(this.Data.home)
    this.experience = new ExperienceModel(this.Data.experience)
    this.education = new EducationModel(this.Data.education)
    this.resume = new ResumeModel(this.Data.resume)
    this.portfolio = new PortfolioSectionModel(this.Data.portfolio)
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

  get PortfolioSection (): PortfolioSectionModel {
    return this.portfolio
  }
}

export default new PortfolioModel(modelData, Theme)
