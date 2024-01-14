import { type HtmlGenerator, Components, ComponentsClassName } from './../types/util.d'
import { type ThemeType } from '../types/util'
import { themeClassGenerator, themeUpdator } from '../util/util'

export default abstract class View<T extends HTMLElement, U> {
  protected parentElement: T
  protected components: ComponentsClassName
  private readonly htmlGenerator: HtmlGenerator
  constructor (parentElementId: string, htmlGenerator: HtmlGenerator, components: ComponentsClassName) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.parentElement = document.getElementById(parentElementId)! as T
    this.htmlGenerator = htmlGenerator
    this.components = components
  }

  protected componentGenerator: (components: ComponentsClassName) => Components = (components) => {
     return {
      cards: components.cards ? document.querySelectorAll(components.cards) : null,
      btns: components.btns ? document.querySelectorAll(components.btns) : null,
      background: components.background ? document.querySelector(components.background) : null,
      elements: components.elements
        ? components.elements.map((className) => document.querySelectorAll(className)!)
        : null,
    }
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
          // console.log('newEl', attr.name, attr.value)
          curEl.setAttribute(attr.name, attr.value)
        })

      // Compare specific text nodes or elements
      const newTextNodes = Array.from(newEl.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE)
      const curTextNodes = Array.from(curEl.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE)

      newTextNodes.forEach((newTextNode, j) => {
        const curTextNode = curTextNodes[j]

        if (newTextNode.nodeValue !== curTextNode.nodeValue) {
          // Do something with the text content, e.g., update it
          curTextNode.nodeValue = newTextNode.nodeValue
        }
      });
      }
    })
  }

  // updateTheme: (theme: ThemeType, _data?: HeaderData) => void = (theme, _data) => {
  //   const curTheme = theme === ThemeEnum.dark ? 'dark' : 'light'
  //   const prevTheme = this.themeElement.dataset.theme === 'dark' ? 'dark' : 'light'
  //   const themeBtnClassGenerator = themeClassGenerator(prevTheme, curTheme)
  //   const themeBackgroundGenerator = themeClassGenerator(prevTheme, curTheme)
  //   const themeCardGenerator = themeClassGenerator(prevTheme, curTheme)
  //   const cards = document.querySelectorAll('.card')
  //   cards.forEach((card) => {
  //     themeUpdator(card as HTMLDivElement, themeCardGenerator('card'))
  //   })
  //   const buttons = document.querySelectorAll('.button')
  //   buttons.forEach(btn => {
  //     themeUpdator(btn as HTMLButtonElement, themeBtnClassGenerator('btn'))
  //   })

  //   themeUpdator(this.themeElement, themeBtnClassGenerator('theme-btn'))
  //   themeUpdator(document.body, themeBackgroundGenerator('background'))
  //   this.themeElement.dataset.theme = curTheme
  // }

  updateTheme ({elementClassName = null, curTheme, prevTheme}: {elementClassName?: string[] | null, curTheme: ThemeType, prevTheme: ThemeType}): void {
    const {cards, btns, background, elements} = this.componentGenerator(this.components)
    if (background) {
      const backgroundThemeGenerator = themeClassGenerator(prevTheme, curTheme)
      themeUpdator(background as HTMLBodyElement, backgroundThemeGenerator('background'))
    }
    
    if (elements && elementClassName) {
      const elementThemeGenerator = themeClassGenerator(prevTheme, curTheme)
      elements.forEach((element, index) => {
        element.forEach((ele) => {
          themeUpdator(ele as HTMLElement, elementThemeGenerator(elementClassName[index]))
        })
      })
    }
    
    if (cards && cards.length !== 0) {
      const cardsThemeGenerator = themeClassGenerator(prevTheme, curTheme)
      cards.forEach((card) => {
        themeUpdator(card as HTMLDivElement, cardsThemeGenerator('card'))
      })
    }

    if (btns && btns.length !== 0) {
      const btnsThemeGenerator = themeClassGenerator(prevTheme, curTheme)
      btns.forEach((btn) => {
        themeUpdator(btn as HTMLButtonElement, btnsThemeGenerator('btn'))
      })
    }
  }
}
