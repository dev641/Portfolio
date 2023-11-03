import { heading, subHeading, education as ed, experience as exp, btns } from '../../data/Resume/resume.json'
import { typeChecker } from '../../decorator/typeChecker'
// import { SkillSetMapper } from './skillAction'

const edResume = typeChecker(ed.resumes)
const expResume = typeChecker(exp.resumes)

const sectionHeader = {
  heading,
  subHeading
}
const education = {
  heading: ed.heading,
  timeLine: ed.timeLine,
  resume: edResume
}

const experience = {
  heading: exp.heading,
  timeLine: exp.timeLine,
  resume: expResume
}
// const skillMapper = new SkillSetMapper('')
// skillMapper.updateMapper()
// const mapper = skillMapper.SkillSetMapper
// console.log(mapper)
// // eslint-disable-next-line no-debugger
// debugger
export default { sectionHeader, education, experience, btns }
