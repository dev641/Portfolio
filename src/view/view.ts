import { type headerData } from '../types/menu'

export default abstract class View<T extends HTMLElement> {
  protected parentElement: T
  constructor (parentElementId: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.parentElement = document.getElementById(parentElementId)! as T
  }
  abstract render (data: headerData): void
}
