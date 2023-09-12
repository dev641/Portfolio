// menu -> brand  right list

import { type ThemeEnum } from '../model/enum'
export type UpdateFileType = (path: string, key: string, value: string) => void

export interface Item {
  name?: string
  href?: string
}

export type ItemGenerator = (items: Item | Item[]) => string

// Theme
export type ThemeType = ThemeEnum.dark | ThemeEnum.light

export type ThemeGenerator = (theme: ThemeType) => string

export type ControlThemeType = (theme: ThemeType) => void

// Header
export type HtmlGenerator = (items: T) => string

export interface classList { current: string, prev: string }
