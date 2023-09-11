export type HeaderData = {
  brand: Item
  menu: Item[]
} & { theme: ThemeType }

export interface ModelData {
  header: HeaderData
  // home: {
  //   Bio: BioCard
  //   CV: CvCard
  //   Image: ImageCard
  // }
}
