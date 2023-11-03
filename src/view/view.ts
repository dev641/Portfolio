import { type HtmlGenerator } from './../types/util.d'
import { type ThemeType } from '../types/util'

export default abstract class View<T extends HTMLElement, U> {
  protected parentElement: T
  private readonly htmlGenerator: HtmlGenerator
  constructor (parentElementId: string, htmlGenerator: HtmlGenerator) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.parentElement = document.getElementById(parentElementId)! as T
    this.htmlGenerator = htmlGenerator
  }

  // abstract render (data: U, theme?: ThemeType): void
  protected render (data: U, theme: ThemeType, options: { sectionBreak?: boolean } = { sectionBreak: true }): void {
    const html = this.htmlGenerator(data, theme)
    this.parentElement.insertAdjacentHTML('afterbegin', html)
    ;(options.sectionBreak ?? false) && this.renderSectionBreak()
  }

  private renderSectionBreak (): void {
    const hr: string = '<hr class="section-break">'
    this.parentElement.insertAdjacentHTML('afterend', hr)
  }

  update (theme: ThemeType, data?: U): void {
    const newMarkup = this.htmlGenerator(data, theme)
    const newDom = document.createRange().createContextualFragment(newMarkup)
    const newElements = Array.from(newDom.querySelectorAll('*'))
    const curElements = Array.from(this.parentElement.querySelectorAll('*'))
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i]
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          // console.log(attr.name, attr.value, curEl.getAttribute(attr.name))
          curEl.setAttribute(attr.name, attr.value)
        })
      }
    })
  }
}
