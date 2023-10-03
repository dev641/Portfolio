import { heading, subHeading, education as ed, experience as exp, btns } from '../../data/Resume/resume.json'
import { typeChecker } from '../../decorator/typeChecker'

const edResume = typeChecker(ed.resumes)
const expResume = typeChecker(exp.resumes)

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

export default { heading, subHeading, education, experience, btns }
