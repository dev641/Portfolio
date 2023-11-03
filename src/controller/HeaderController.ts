import { type ThemeFinder } from './../types/util'
import { type HeaderView } from '../view/HeaderView'
import { type HeaderModel } from '../model/HeaderModel'
import { Controller } from './Controller'
import { type HeaderData } from '../types/Model'
export class HeaderController extends Controller<HeaderModel, HeaderView, HeaderData, HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (headerModel: HeaderModel, headerView: HeaderView, themeFinder: ThemeFinder) {
    super(headerModel, headerView, themeFinder)
  }
}
