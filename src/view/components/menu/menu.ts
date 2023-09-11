import { ThemeEnum } from './../../../model/Enum'
import {
  type HeaderGenerator,
  type ItemGenerator
  ,
  type HeaderData,
  type Item,
  type ThemeGenerator
} from '../../../types/menu'
const itemGenerator: ItemGenerator = (items) => {
  return Array.isArray(items)
    ? items
      .map(
        (
          menu: Item
        ) => `<li class="nav-container__list-item" id="nav-container__list-item">
                <a href="#${menu.href}">${menu.name}</a>
              </li>`
      )
      .join('')
    // eslint-disable-next-line operator-linebreak
    : // `<img src="${items.href}" alt="${items.name}-logo" class="nav-logo__image" id="nav-logo__image">
      `<div class="nav-logo__image" id="nav-logo__image"><i class="fa-solid fa-user fa-2x" id="nav-logo__image-icon"></i></div>
    <h2 class="nav-logo__name" id="nav-logo__name">${items.name}</h2>
  `
}

const themeGenerator: ThemeGenerator = (theme) => {
  const Theme = theme === ThemeEnum.dark ? 'dark' : 'light'
  return `
  <div class="nav-container__theme"  id="nav-container__theme">
      <button class="nav-container__theme-btn dark-theme-btn" data-theme="${Theme}" id="nav-container__theme-btn">
      <i class="fa-solid fa-circle-half-stroke fa-2xl"></i>
    </button>
    </div>
  `
}
const headerGenerator: HeaderGenerator = ({
  brand,
  menu,
  theme
}: HeaderData) => {
  const navbar = `
        <nav class="nav" id="nav">
          <div class="nav-logo" id="nav-logo">
            ${itemGenerator(brand)}
          </div>
          <div class="nav-container" id="nav-container">
            <ul class="nav-container__list" id="nav-container__list">
              ${itemGenerator(menu)}
            </ul>
            ${themeGenerator(theme)}
          </div>
        </nav>
  `
  return navbar
}

export default headerGenerator