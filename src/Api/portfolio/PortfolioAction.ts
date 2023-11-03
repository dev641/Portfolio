import { heading, subHeading, data as p } from '../../data/Portfolio/Portfolio.json'

const sectionHeader = { heading, subHeading }
const data = p.map(data => (
  {
    portfolio: data.portfolio,
    expand: Object.assign({}, data.portfolio, data.expand)
  }
))
export default { sectionHeader, data }
