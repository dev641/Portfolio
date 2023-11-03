import { type UserDetails, type BioCard, type CvCard, type ImageCard, type timeLine, type SectionHeader, type PortfolioCard, type PortfolioExpandCard } from './cards'
import { type ThemeType } from './util'

export interface ThemeData {
  theme: ThemeType
}
export interface HeaderData {
  brand: Item
  menu: Item[]
}

export interface HomeData {
  bio: BioCard
  CV: CvCard
  image: ImageCard
}

export interface ExperienceData {
  sectionHeader: SectionHeader
  experience: UserDetails[]
}
export interface EducationData {
  sectionHeader: SectionHeader
  education: UserDetails[]
}
export interface ResumeData {
  sectionHeader: SectionHeader
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

export interface PortfolioData {
  sectionHeader: SectionHeader
  data: Array<{ portfolio: PortfolioCard, expand: PortfolioExpandCard }>
}

export interface ModelData {
  header: HeaderData
  home: HomeData
  experience: ExperienceData
  education: EducationData
  resume: ResumeData
  portfolio: PortfolioData
}
