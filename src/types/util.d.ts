// menu -> brand  right list

import { type ThemeEnum } from '../util/Enum'
export type UpdateFileType = (path: string, key: string, value: string) => void

export interface Item {
  name?: string
  href?: string
}

export type Components = {
  cards: NodeListOf<Element> | null,
  btns: NodeListOf<Element> | null,
  background: HTMLBodyElement | null,
  elements: NodeListOf<Element>[] | null
}

export type ComponentsClassName = {
  cards?: string,
  btns?: string,
  background?: string,
  elements?: string[]
}
export type ThemeClassGeneratorType = { curTheme: ThemeType, prevTheme: ThemeType }
export type ItemGenerator = (items: Item | Item[], theme: ThemeType) => string

// Theme
export type ThemeType = ThemeEnum.dark | ThemeEnum.light

export type ThemeGenerator = (theme: ThemeType) => string

export type ControlThemeType = (theme: ThemeType) => void

// Header
export type HtmlGenerator = (items: T, theme: ThemeType) => string

export type ThemeChanger = (prevTheme: ThemeType, curTheme: ThemeType) => void

export interface classList { current: string, prev: string }

export type HtmlUpdator = (name: T, theme?: ThemeType) => void

export type ThemeFinder = () => ThemeType
