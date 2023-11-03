import { education as ed, heading, subHeading } from '../../data/Education/education.json'
import { typeChecker } from '../../decorator/typeChecker'

const education = typeChecker(ed)

export default { education, sectionHeader: { heading, subHeading } }
