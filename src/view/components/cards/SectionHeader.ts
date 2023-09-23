import { type render, type SectionContainer } from '../../../types/cards'

const sectionHeader: render = ({ heading, subHeading }: SectionContainer) => {
  return `
  <div class="subHeading" id="subHeading">${subHeading}</div>
    <div class="heading" id="heading">${heading}</div>
  `
}

export default sectionHeader
