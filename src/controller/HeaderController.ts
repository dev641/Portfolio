import { type ControlThemeType } from './../types/menu.d'
import { type HeaderView } from '../view/HeaderView'
import { type HeaderModel } from '../model/HeaderModel'
export class HeaderController {
  private readonly headerModel: HeaderModel
  private readonly headerView: HeaderView
  constructor (headerModel: HeaderModel, headerView: HeaderView) {
    this.headerModel = headerModel
    this.headerView = headerView
    this.headerView.changeTheme(this.controlTheme.bind(this))
  }

  controlTheme: ControlThemeType = (theme) => {
    this.headerModel.changeTheme(theme)
    this.headerView.update(this.headerModel.Data)
  }
}
