import { type UserDetails, type BioCard, type CvCard, type ImageCard, type timeLine } from './cards'
import { type ThemeType } from './util'

export interface ThemeData {
  theme: ThemeType
}
export type HeaderData = {
  brand: Item
  menu: Item[]
} & { theme: ThemeType }

export interface HomeData {
  bio: BioCard
  CV: CvCard
  image: ImageCard
}

export interface ExperienceData {
  subHeading: string
  heading: string
  experience: UserDetails[]
}
export interface EducationData {
  subHeading: string
  heading: string
  education: UserDetails[]
}
export interface ResumeData {
  subHeading: string
  heading: string
  btns: {
    ee: {
      name: string
      status: string
    }
    skills: {
      name: string
      status: string
    }
  }
  education: {
    heading: string
    timeLine: timeLine
    resume: UserDetails[]
  }
  experience: {
    heading: string
    timeLine: timeLine
    resume: UserDetails[]
  }
}
export interface ModelData {
  header: HeaderData
  home: HomeData
  experience: ExperienceData
  education: EducationData
  resume: ResumeData
}
