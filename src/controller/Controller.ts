import type Model from '../model/Model'
import { type ThemeFinder } from '../types/util'
// import { type ModelData } from '../types/Model'
import type View from '../view/view'

export class Controller<T extends Model<X>, U extends View<Y, X>, X, Y extends HTMLElement> {
  private readonly model: T
  private readonly view: U
  private readonly themeFinder: ThemeFinder
  constructor (model: T, view: U, themeFinder: ThemeFinder) {
    this.model = model
    this.view = view
    this.themeFinder = themeFinder
  }

  get Model (): T {
    return this.model
  }

  get View (): U {
    return this.view
  }

  get ThemeFinder (): ThemeFinder {
    return this.themeFinder
  }
}
