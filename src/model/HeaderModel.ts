import { brand, menu } from '../data/menu/menu.json'
import { type Item, type ThemeType, type HeaderData } from '../types/menu'
import { type Theme } from './ThemeModel'
import { ThemeEnum } from './Enum'

export class HeaderModel implements Theme {
  private readonly brand: Item = {}
  private readonly menu: Item[] = []
  private theme: ThemeType
  constructor () {
    this.brand = brand
    this.menu = menu
    this.theme = ThemeEnum.dark
  }

  get Theme (): ThemeType {
    return this.theme
  }

  get Brand (): Item {
    return this.brand
  }

  get Menu (): Item[] {
    return this.menu
  }

  get Data (): HeaderData {
    const brand = this.Brand
    const menu = this.Menu
    const theme = this.Theme
    return {
      brand,
      menu,
      theme
    }
  }

  changeTheme = (theme: ThemeType): void => {
    if (this.theme !== theme) {
      this.theme = theme
    }
  }
}

export default new HeaderModel()
