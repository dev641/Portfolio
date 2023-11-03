/* eslint-disable no-new */
import { type PortfolioView } from '../view/PortfolioView'
import { type PortfolioModel } from './../model/PortfolioModel'
import { HeaderController } from './HeaderController'
import { HomeController } from './HomeController'
import { ExperienceController } from './ExperienceController'
import { EducationController } from './EducationController'
import { ResumeController } from './ResumeController'
import { PortfolioSectionController } from './PortfolioSectionController'
import { type ControlThemeType, type ThemeFinder } from '../types/util'
export default class PortfolioController {
  private readonly Model: PortfolioModel
  private readonly View: PortfolioView
  constructor (Model: PortfolioModel, View: PortfolioView) {
    this.Model = Model
    this.View = View
    this.start()
    this.View.Header.changeTheme(this.controlTheme.bind(this))
  }

  themeFinder: ThemeFinder = () => {
    return this.Model.Theme
  }

  controlTheme: ControlThemeType = (theme) => {
    this.Model.changeTheme(theme)
    this.View.Header.update(theme)
  }

  start (): void {
    new HeaderController(
      this.Model.Header,
      this.View.Header,
      this.themeFinder
    )
    new HomeController(
      this.Model.Home,
      this.View.Home,
      this.themeFinder
    )
    new ExperienceController(
      this.Model.Experience,
      this.View.Experience,
      this.themeFinder
    )
    new EducationController(
      this.Model.Education,
      this.View.Education,
      this.themeFinder
    )
    new ResumeController(
      this.Model.Resume,
      this.View.Resume,
      this.themeFinder
    )
    new PortfolioSectionController(
      this.Model.PortfolioSection,
      this.View.PortfolioSection,
      this.themeFinder
    )
  }
}
