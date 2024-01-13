import { HEADER, PORTFOLIO_SECTION, RESUME, THEME_ELEMENT_CLASS } from '../constant/constant'
import { ThemeType, type classList } from '../types/util'

export const themeClassGenerator: (prevTheme: ThemeType, curTheme: ThemeType) => (className: string) => classList = (prevTheme, curTheme) => {
  return (className) => {
    const classNameGenerator: (theme: string) => string = (theme) => `${theme}-${className}`
    return {
      current: classNameGenerator(curTheme),
      prev: classNameGenerator(prevTheme)
    }
  }
}

export const themeUpdator: (element: HTMLElement, classList: classList) => void = (
  element,
  { current, prev }
) => {
  element.classList.remove(prev)
  element.classList.add(current)
}

export const customElementsGenerators = ({container}: {container: string, theme?: ThemeType}) => {
  const customElementsMap = new Map([
    	[
        HEADER, [
          {name:`#${HEADER} .nav-container__theme`, className: `theme`}, 
          {name: `#${HEADER} #${THEME_ELEMENT_CLASS}`, className: `theme-btn`}
        ]
      ],
      [
        RESUME, [
          {name:`.resume-body`, className: `body`}, 
        ]
      ],
      [
        PORTFOLIO_SECTION, [
          {name:`.carousel__btn`, className: `arrows`}, 
        ]
      ],
    	// [HOME,[`#header .${theme}__theme`, '#header #nav-container__theme-btn']],
  ])
  return customElementsMap.get(container)
}