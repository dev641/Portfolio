// import { ThemeType, ThemeEnum } from "../types/menu";
import { type ThemeType } from '../types/util'

export interface Theme {
  changeTheme: (theme: ThemeType) => void
}
