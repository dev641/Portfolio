import { type HomeModel } from '../model/HomeModel'
import { type HomeData } from '../types/Model'
import { type ThemeFinder } from '../types/util'
import { type HomeView } from '../view/HomeView'
import { Controller } from './Controller'

export class HomeController extends Controller<HomeModel, HomeView, HomeData, HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (model: HomeModel, view: HomeView, themeFinder: ThemeFinder) {
    super(model, view, themeFinder)
  }
}
