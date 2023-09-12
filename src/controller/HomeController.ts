import { type HomeModel } from '../model/HomeModel'
import { type HomeData } from '../types/Model'
import { type HomeView } from '../view/HomeView'
import { Controller } from './Controller'

export class HomeController extends Controller<HomeModel, HomeView, HomeData, HTMLDivElement> {
  constructor (model: HomeModel, view: HomeView) {
    super(model, view)
    this.update()
  }

  update (): void {
    console.log('header')
  }
}
