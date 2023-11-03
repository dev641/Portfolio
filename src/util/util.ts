import { type classList } from '../types/util'

export const themeClassGenerator: (prevTheme: 'light' | 'dark', curTheme: 'light' | 'dark') => (className: string) => classList = (prevTheme, curTheme) => {
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
