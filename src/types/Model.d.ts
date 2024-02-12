import { type UserDetails, type BioCard, type CvCard, type ImageCard, type timeLine, type SectionHeader, type PortfolioCard, type PortfolioExpandCard, ContactDetails, ProfilesCard, ContactForm } from './cards'
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

export interface ProfilesData {
  sectionHeader: SectionHeader
  profiles: ProfilesCard
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
  sectionHeader?: SectionHeader
  data: Array<{ portfolio: PortfolioCard, expand: PortfolioExpandCard }>
}

export interface ModelData {
  header: HeaderData
  home: HomeData
  profiles: ProfilesData
  experience: ExperienceData
  education: EducationData
  resume: ResumeData
  portfolio: PortfolioData
  contact: ContactData
}

export interface ContactData {
  sectionHeader: SectionHeader
  contactDetails: ContactDetails
  contactForm: ContactForm
}

