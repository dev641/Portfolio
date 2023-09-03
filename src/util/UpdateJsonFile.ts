import * as fs from 'fs'
import { type UpdateFileType } from '../types/util'
class UpdateJson {
  private static _instance: UpdateJson
  private constructor () {}
  static getInstance (): UpdateJson {
    if (this._instance instanceof UpdateJson) {
      return this._instance
    }
    this._instance = new UpdateJson()
    return this._instance
  }

  updateFile: UpdateFileType = (path, Key, Value) => {
    const data = fs.readFileSync(path, 'utf-8')
    const parsedData = JSON.parse(data)
    parsedData[Key] = Value
    fs.writeFileSync(path, JSON.stringify(parsedData))
  }
}

export default UpdateJson.getInstance()
