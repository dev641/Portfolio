import { heading, subHeading, experience as exp } from '../../data/Experience/experience.json'
import { typeChecker } from '../../decorator/typeChecker'

const experience = typeChecker(exp)
export default { sectionHeader: { heading, subHeading }, experience }
