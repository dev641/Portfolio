import { type ExperienceData } from '../types/Model'
import { type HtmlGenerator } from '../types/util'
import eeCard from './components/cards/EECard'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'

export class ExperienceView extends View<HTMLDivElement, ExperienceData> {
  constructor (data: ExperienceData) {
    super('experience')
    this.render(data)
  }

  experienceGenerator: HtmlGenerator = ({ subHeading, heading, experience }: ExperienceData) => {
    return `
     ${sectionHeader({ heading, subHeading })}
     ${experience.map(exp => eeCard(exp)).join('')}
    `
  }

  render (data: ExperienceData): void {
    const html = this.experienceGenerator(data)
    this.parentElement.insertAdjacentHTML('afterbegin', html)
    this.renderSectionBreak()
  }
}
