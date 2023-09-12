import type Model from '../model/Model'
// import { type ModelData } from '../types/Model'
import type View from '../view/view'

export class Controller<T extends Model<X>, U extends View<Y, X>, X, Y extends HTMLElement> {
  protected readonly model: T
  protected readonly view: U
  constructor (model: T, view: U) {
    this.model = model
    this.view = view
  }
}
