import { HeaderView } from './HeaderView'
import { type ModelData } from '../types/Model'
import { HomeView } from './HomeView'
import { ExperienceView } from './ExperienceView'
import { EducationView } from './EducationView'
import { ResumeView } from './ResumeView'
import { type ThemeType } from '../types/util'
import { PortfolioSectionView } from './PortfolioSectionView'
export class PortfolioView {
  private readonly header: HeaderView
  private readonly home: HomeView
  private readonly experience: ExperienceView
  private readonly education: EducationView
  private readonly resume: ResumeView
  private readonly portfolio: PortfolioSectionView
  constructor (data: ModelData, theme: ThemeType) {
    this.header = new HeaderView(data.header, theme)
    this.home = new HomeView(data.home, theme)
    this.experience = new ExperienceView(data.experience, theme)
    this.education = new EducationView(data.education, theme)
    this.resume = new ResumeView(data.resume, theme)
    this.portfolio = new PortfolioSectionView(data.portfolio, theme)
  }

  get Header (): HeaderView {
    return this.header
  }

  get Home (): HomeView {
    return this.home
  }

  get Experience (): ExperienceView {
    return this.experience
  }

  get Education (): EducationView {
    return this.education
  }

  get Resume (): ResumeView {
    return this.resume
  }

  get PortfolioSection (): PortfolioSectionView {
    return this.portfolio
  }
}
