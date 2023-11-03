import { brand, menu, theme as th } from '../../data/Header/Header.json'
import { ThemeEnum } from '../../util/Enum'
export const theme = th === 'dark' ? ThemeEnum.dark : ThemeEnum.light
export default { brand, menu }
