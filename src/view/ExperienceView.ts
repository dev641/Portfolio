import { EXPERIENCE } from '../constant/constant'
import { type ExperienceData } from '../types/Model'
import { type ThemeType, type HtmlGenerator, ComponentsClassName } from '../types/util'
import eeCard from './components/cards/EECard'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'

const experienceGenerator: HtmlGenerator = ({ sectionHeader: sectionHeaderData, experience }: ExperienceData, theme) => {
  return `
     ${sectionHeader(sectionHeaderData)}
     ${experience.map(exp => eeCard(exp, theme)).join('')}
    `
}

const componentClassNameGenerator: () => ComponentsClassName = () => {
  return {
    btns: `#${EXPERIENCE} .button`,
    cards: `#${EXPERIENCE} .card`
  }
}
export class ExperienceView extends View<HTMLDivElement, ExperienceData> {
  constructor (data: ExperienceData, theme: ThemeType) {
    super(EXPERIENCE, experienceGenerator, componentClassNameGenerator())
    this.render(data, theme)
    // this.components = this.componentGenerator(componentClassNameGenerator())
  }
}
