import { type UserDetails, type BioCard, type CvCard, type ImageCard } from './cards'

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
export interface ModelData {
  header: HeaderData
  home: HomeData
  experience: ExperienceData
  education: EducationData
}
