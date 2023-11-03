import header, { theme } from './header/HeaderAction'
import home from './home/HomeAction'
import education from './education/EducationAction'
import experience from './experience/ExperienceAction'
import resume from './resume/ResumeAction'
import portfolio from './portfolio/PortfolioAction'
import { type ModelData } from '../types/Model'
import { type ThemeType } from '../types/util'

export const Theme: ThemeType = theme
export default {
  header,
  home,
  education,
  experience,
  resume,
  portfolio
} satisfies ModelData
