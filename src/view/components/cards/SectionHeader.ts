import { type render, type SectionHeader } from '../../../types/cards'

const sectionHeader: render = ({ heading, subHeading }: SectionHeader) => {
  return `
  <div class="subHeading" id="subHeading">${subHeading}</div>
    <div class="heading" id="heading">${heading}</div>
  `
}

export default sectionHeader
