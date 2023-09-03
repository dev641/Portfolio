// import { ThemeType, ThemeEnum } from "../types/menu";
import { type ThemeType } from '../types/menu'

export interface Theme {
  changeTheme: (theme: ThemeType) => void
}
