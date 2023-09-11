/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ThemeEnum } from '../model/Enum'
import { type ControlThemeType, type classList, type HeaderData } from '../types/menu'
import navGenerator from './components/menu/menu'
import View from './view'
export class HeaderView extends View<HTMLDivElement> {
  private readonly themeElement: HTMLButtonElement
  constructor (data: HeaderData) {
    super('header')
    this.render(data)
    this.themeElement = document.getElementById(
      'nav-container__theme-btn'
    )! as HTMLButtonElement
  }

  render: (data: HeaderData) => void = (data: HeaderData) => {
    // debugger;
    const navBar = navGenerator(data)
    this.parentElement.insertAdjacentHTML('afterbegin', navBar)
  }

  update: (data: HeaderData) => void = (data) => {
    const themeClassGenerator: () => (className: string) => classList = () => {
      return (className) => {
        const prevTheme = this.themeElement.dataset.theme!
        const classNameGenerator: (theme: string) => string = (theme) => `${theme}-${className}`
        return {
          current: classNameGenerator(curTheme),
          prev: classNameGenerator(prevTheme)
        }
      }
    }
    const curTheme = data.theme === ThemeEnum.dark ? 'dark' : 'light'
    const themeBtnClassGenerator = themeClassGenerator()
    const themeBackgroundGenerator = themeClassGenerator()
    const themeCardGenerator = themeClassGenerator()
    const themeUpdator: (element: HTMLElement, classList: classList) => void = (
      element,
      { current, prev }
    ) => {
      element.classList.remove(prev)
      element.classList.add(current)
    }
    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
      themeUpdator(card as HTMLDivElement, themeCardGenerator('card'))
    })
    themeUpdator(this.themeElement, themeBtnClassGenerator('theme-btn'))
    themeUpdator(document.body, themeBackgroundGenerator('background'))
    this.themeElement.dataset.theme = curTheme
  }

  changeTheme: (controlTheme: ControlThemeType) => void = (controlTheme) => {
    this.themeElement.addEventListener('click', (e: Event) => {
      let target = e.target as HTMLElement
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      target = target.closest('.nav-container__theme-btn')!
      // debugger;
      const newTheme =
        target.dataset.theme !== 'dark' ? ThemeEnum.dark : ThemeEnum.light
      controlTheme(newTheme)
    })
  }
}
