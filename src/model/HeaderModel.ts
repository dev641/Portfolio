/* eslint-disable @typescript-eslint/no-useless-constructor */
import { type HeaderData } from '../types/Model'
import Model from './Model'

export class HeaderModel extends Model<HeaderData> {
  constructor (headerData: HeaderData) {
    super(headerData)
  }
}
