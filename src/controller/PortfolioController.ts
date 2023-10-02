/* eslint-disable no-new */
import { type PortfolioView } from '../view/PortfolioView'
import { type PortfolioModel } from './../model/PortfolioModel'
import { HeaderController } from './HeaderController'
import { HomeController } from './HomeController'
import { ExperienceController } from './ExperienceController'
import { EducationController } from './EducationController'
import { ResumeController } from './ResumeController'
export default class PortfolioController {
  private readonly Model: PortfolioModel
  private readonly View: PortfolioView

  constructor (Model: PortfolioModel, View: PortfolioView) {
    this.Model = Model
    this.View = View
    this.start()
  }

  start (): void {
    new HeaderController(
      this.Model.Header,
      this.View.Header
    )
    new HomeController(
      this.Model.Home,
      this.View.Home
    )
    new ExperienceController(
      this.Model.Experience,
      this.View.Experience
    )
    new EducationController(
      this.Model.Education,
      this.View.Education
    )
    new ResumeController(
      this.Model.Resume,
      this.View.Resume
    )
  }
}
