import { type HomeData } from '../types/Model'
import { type HtmlGenerator } from '../types/util'
import bioCard from './components/cards/BioCard'
import cvCard from './components/cards/CvCard'
import imageCard from './components/cards/ImageCard'
import View from './view'

export class HomeView extends View<HTMLDivElement, HomeData> {
  constructor (data: HomeData) {
    super('home')
    this.render(data)
  }

  homeGenerator: HtmlGenerator = (data: HomeData) => {
    return `
      ${bioCard(data.bio)}${cvCard(data.CV)}${imageCard(data.image)}
    `
  }

  render (data: HomeData): void {
    const html = this.homeGenerator(data)
    this.parentElement.insertAdjacentHTML('afterbegin', html)
    this.renderSectionBreak()
  }

  // update (data: HomeData): void {
  // }
}
