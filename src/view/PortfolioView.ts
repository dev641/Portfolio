import { HeaderView } from './HeaderView'
import { type ModelData } from '../types/Model'
import { HomeView } from './HomeView'
import { ExperienceView } from './ExperienceView'
import { EducationView } from './EducationView'
export class PortfolioView {
  private readonly header: HeaderView
  private readonly home: HomeView
  private readonly experience: ExperienceView
  private readonly education: EducationView
  constructor (data: ModelData) {
    this.header = new HeaderView(data.header)
    this.home = new HomeView(data.home)
    this.experience = new ExperienceView(data.experience)
    this.education = new EducationView(data.education)
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
}
