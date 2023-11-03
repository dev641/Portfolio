import { type ExperienceData } from '../types/Model'
import { type ThemeType, type HtmlGenerator } from '../types/util'
import eeCard from './components/cards/EECard'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'

const experienceGenerator: HtmlGenerator = ({ sectionHeader: sectionHeaderData, experience }: ExperienceData) => {
  return `
     ${sectionHeader(sectionHeaderData)}
     ${experience.map(exp => eeCard(exp)).join('')}
    `
}
export class ExperienceView extends View<HTMLDivElement, ExperienceData> {
  constructor (data: ExperienceData, theme: ThemeType) {
    super('experience', experienceGenerator)
    this.render(data, theme)
  }
}
