import { type HomeData } from '../types/Model'
import { type ThemeType, type HtmlGenerator } from '../types/util'
import bioCard from './components/cards/BioCard'
import cvCard from './components/cards/CvCard'
import imageCard from './components/cards/ImageCard'
import View from './view'

const htmlGenerator: HtmlGenerator = (data: HomeData) => {
  return `
      ${bioCard(data.bio)}${cvCard(data.CV)}${imageCard(data.image)}
    `
}
export class HomeView extends View<HTMLDivElement, HomeData> {
  constructor (data: HomeData, theme: ThemeType) {
    super('home', htmlGenerator)
    this.render(data, theme)
  }
}
