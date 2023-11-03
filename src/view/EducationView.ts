import { type EducationData } from '../types/Model'
import { type ThemeType, type HtmlGenerator } from '../types/util'
import eeCard from './components/cards/EECard'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'

const educationGenerator: HtmlGenerator = ({ sectionHeader: sectionHeaderData, education }: EducationData) => {
  return `
     ${sectionHeader(sectionHeaderData)}
     ${education.map(exp => eeCard(exp)).join('')}
    `
}
export class EducationView extends View<HTMLDivElement, EducationData> {
  constructor (data: EducationData, theme: ThemeType) {
    super('education', educationGenerator)
    this.render(data, theme)
  }
}
