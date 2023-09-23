import { type EducationData } from '../types/Model'
import { type HtmlGenerator } from '../types/util'
import eeCard from './components/cards/EECard'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'

export class EducationView extends View<HTMLDivElement, EducationData> {
  constructor (data: EducationData) {
    super('education')
    this.render(data)
  }

  educationGenerator: HtmlGenerator = ({ subHeading, heading, education }: EducationData) => {
    return `
     ${sectionHeader({ heading, subHeading })}
     ${education.map(exp => eeCard(exp)).join('')}
    `
  }

  render (data: EducationData): void {
    const html = this.educationGenerator(data)
    this.parentElement.insertAdjacentHTML('afterbegin', html)
    this.renderSectionBreak()
  }
}
