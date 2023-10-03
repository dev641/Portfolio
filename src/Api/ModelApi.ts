import header from './header/HeaderAction'
import home from './home/HomeAction'
import education from './education/EducationAction'
import experience from './experience/ExperienceAction'
import resume from './resume/ResumeAction'
import { type ModelData } from '../types/Model'

export default {
  header,
  home,
  education,
  experience,
  resume
} satisfies ModelData
