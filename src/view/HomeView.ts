import { HOME } from '../constant/constant'
import { type HomeData } from '../types/Model'
import { type ThemeType, type HtmlGenerator, ComponentsClassName } from '../types/util'
import bioCard from './components/cards/BioCard'
import cvCard from './components/cards/CvCard'
import imageCard from './components/cards/ImageCard'
import View from './view'

const htmlGenerator: HtmlGenerator = (data: HomeData) => {
  return `
      ${bioCard(data.bio)}${cvCard(data.CV)}${imageCard(data.image)}
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
