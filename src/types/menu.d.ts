// menu -> brand  right list

import { type ThemeEnum } from '../model/enum'

export interface Item {
  name?: string
  href?: string
}

export type itemGenerator = (items: Item | Item[]) => string

// Theme
export type ThemeType = ThemeEnum.dark | ThemeEnum.light

export type ThemeGenerator = (theme: ThemeType) => string

export type ControlThemeType = (theme: ThemeType) => void

// Header
export type headerData = {
  brand: Item
  menu: Item[]
} & { theme: ThemeType }

export type headerGenerator = (items: headerData) => string

export interface classList { current: string, prev: string }
