import { EDUCATION } from '../constant/constant'
import { type EducationData } from '../types/Model'
import { type ThemeType, type HtmlGenerator, ComponentsClassName } from '../types/util'
import eeCard from './components/cards/EECard'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'

const educationGenerator: HtmlGenerator = ({ sectionHeader: sectionHeaderData, education }: EducationData) => {
  return `
     ${sectionHeader(sectionHeaderData)}
     ${education.map(exp => eeCard(exp)).join('')}
    `
}
const componentClassNameGenerator: () => ComponentsClassName = () => {
  return {
    btns: `#${EDUCATION} .button`,
    cards: `#${EDUCATION} .card`
  }
}
export class EducationView extends View<HTMLDivElement, EducationData> {
  constructor (data: EducationData, theme: ThemeType) {
    super(EDUCATION, educationGenerator,  componentClassNameGenerator())
    this.render(data, theme)
    // this.components = this.componentGenerator(componentClassNameGenerator())
  }
}
