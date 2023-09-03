import { type HeaderData } from './menu'

export type UpdateFileType = (path: string, key: string, value: string) => void

export interface ModelData {
  header: HeaderData
}
