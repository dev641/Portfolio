import { HOME } from '../constant/constant'
import { type HomeData } from '../types/Model'
import { type ThemeType, type HtmlGenerator, ComponentsClassName } from '../types/util'
import bioCard from './components/cards/BioCard'
import cvCard from './components/cards/CvCard'
import imageCard from './components/cards/ImageCard'
import View from './view'

const htmlGenerator: HtmlGenerator = (data: HomeData, theme: ThemeType) => {
  return `
      <div class="home__left" id="home__left">${bioCard(data.bio, theme)}${cvCard(data.CV, theme)}</div>
      <div class="home__right" id="home__right">${imageCard(data.image, theme)}</div>
    `
}
const componentClassNameGenerator: () => ComponentsClassName = () => {
  return {
    btns: `#${HOME} .button`,
    cards: `#${HOME} .card`
  }
}

export class HomeView extends View<HTMLDivElement, HomeData> {
  constructor (data: HomeData, theme: ThemeType) {
    super(HOME, htmlGenerator, componentClassNameGenerator())
    this.render(data, theme)
    // this.components = this.componentGenerator(componentClassNameGenerator())
  }
}
