import { type HeaderData } from '../types/Model'

export default abstract class View<T extends HTMLElement> {
  protected parentElement: T
  constructor (parentElementId: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.parentElement = document.getElementById(parentElementId)! as T
  }
  abstract render (data: HeaderData): void
  abstract update (data: HeaderData): void
}
