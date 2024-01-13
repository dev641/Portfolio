/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ThemeEnum } from '../util/Enum'
import { type ThemeType, type ControlThemeType, ComponentsClassName } from '../types/util'
import { type HeaderData } from '../types/Model'
import navGenerator from './components/menu/menu'
import View from './view'
import { HEADER, THEME_ELEMENT_CLASS } from '../constant/constant'
import { customElementsGenerators } from '../util/util'

const componentClassNameGenerator: (theme: ThemeType) => ComponentsClassName = (theme) => {
  const elements = customElementsGenerators({container: HEADER, theme})?.map(ele => ele.name)
  return {
    btns: `#${HEADER} button`,
    elements,
    background: 'body'
  }
}
export class HeaderView extends View<HTMLDivElement, HeaderData> {
  private readonly themeElement: HTMLButtonElement
  constructor (data: HeaderData, theme: ThemeType) {
    super(HEADER, navGenerator,componentClassNameGenerator(theme) )
    this.render(data, theme, { sectionBreak: false })
    this.themeElement = document.getElementById(
      THEME_ELEMENT_CLASS
    )! as HTMLButtonElement
    // this.components = this.componentGenerator(componentClassNameGenerator(theme))
    // debugger
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

  get ThemeElement (): HTMLButtonElement {
    return this.themeElement
  }

  modifyThemeDataset (curTheme: ThemeType): void {
    this.themeElement.dataset.theme = curTheme
  }

  changeTheme: (controlTheme: ControlThemeType) => void = (controlTheme) => {
    this.themeElement.addEventListener('click', (e: Event) => {
      let target = e.target as HTMLElement
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      target = target.closest(`.${THEME_ELEMENT_CLASS}`)!
      const newTheme =
        target.dataset.theme !== 'dark' ? ThemeEnum.dark : ThemeEnum.light
      controlTheme(newTheme)
    })
  }
}
