import { type BioCard, type CvCard, type ImageCard } from './cards'

export type HeaderData = {
  brand: Item
  menu: Item[]
} & { theme: ThemeType }

export interface HomeData {
  bio: BioCard
  CV: CvCard
  image: ImageCard
}
export interface ModelData {
  header: HeaderData
  home: HomeData
  // home: {
  //   Bio: BioCard
  //   CV: CvCard
  //   Image: ImageCard
  // }
}
