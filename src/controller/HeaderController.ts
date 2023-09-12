import { type ControlThemeType } from './../types/util'
import { type HeaderView } from '../view/HeaderView'
import { type HeaderModel } from '../model/HeaderModel'
import { Controller } from './Controller'
import { type HeaderData } from '../types/Model'
export class HeaderController extends Controller<HeaderModel, HeaderView, HeaderData, HTMLDivElement> {
  constructor (headerModel: HeaderModel, headerView: HeaderView) {
    super(headerModel, headerView)
    this.view.changeTheme(this.controlTheme.bind(this))
  }

  controlTheme: ControlThemeType = (theme) => {
    this.model.changeTheme(theme)
    this.view.update(this.model.Data)
  }
}
