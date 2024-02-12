import header, { theme } from './header/HeaderAction'
import home from './home/HomeAction'
import profiles from './Profiles/ProfilesAction'
import education from './education/EducationAction'
import experience from './experience/ExperienceAction'
import resume from './resume/ResumeAction'
import portfolio from './portfolio/PortfolioAction'
import contact from './Contact/ContactActions'
import { type ModelData } from '../types/Model'
import { type ThemeType } from '../types/util'

export const Theme: ThemeType = theme
export default {
  header,
  home,
  profiles,
  education,
  experience,
  resume,
  portfolio,
  contact
} satisfies ModelData
