/* eslint-disable @typescript-eslint/no-useless-constructor */
import { type ThemeType } from '../types/util'
import { type HeaderData } from '../types/Model'
import ThemeEvent, { type Theme } from './ThemeModel'
import Model from './Model'

export class HeaderModel extends Model<HeaderData> implements Theme {
  constructor (headerData: HeaderData) {
    super(headerData)
  }

  changeTheme = (theme: ThemeType): void => {
    if (this.Data.theme !== theme) {
      this.Data.theme = theme
    }
    ThemeEvent.enqueueTheme(theme)
  }
}

// export default new HeaderModel()
