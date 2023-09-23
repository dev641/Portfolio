/* eslint-disable no-new */
import { type PortfolioView } from '../view/PortfolioView'
import { type PortfolioModel } from './../model/PortfolioModel'
import { HeaderController } from './HeaderController'
import { HomeController } from './HomeController'
import { ExperienceController } from './ExperienceController'
import { EducationController } from './EducationController'
export default class PortfolioController {
  private readonly PortfolioModel: PortfolioModel
  private readonly PortfolioView: PortfolioView

  constructor (portfolioModel: PortfolioModel, portfolioView: PortfolioView) {
    this.PortfolioModel = portfolioModel
    this.PortfolioView = portfolioView
    this.start()
  }

  start (): void {
    new HeaderController(
      this.PortfolioModel.Header,
      this.PortfolioView.Header
    )
    new HomeController(
      this.PortfolioModel.Home,
      this.PortfolioView.Home
    )
    new ExperienceController(
      this.PortfolioModel.Experience,
      this.PortfolioView.Experience
    )
    new EducationController(
      this.PortfolioModel.Education,
      this.PortfolioView.Education
    )
  }
}
