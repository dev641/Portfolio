import { brand, menu } from '../data/menu/menu.json'
import { type ThemeType } from '../types/menu'
import { type HeaderData } from '../types/Model'
import { type Theme } from './ThemeModel'
import { ThemeEnum } from './Enum'
import Model from './Model'

export class HeaderModel extends Model<HeaderData> implements Theme {
  constructor () {
    const headerData: HeaderData = {
      brand,
      menu,
      theme: ThemeEnum.dark
    }
    super(headerData)
  }

  changeTheme = (theme: ThemeType): void => {
    if (this.Data.theme !== theme) {
      this.Data.theme = theme
    }
  }
}

export default new HeaderModel()
