export default class Model<T> {
  private data: T
  constructor (data: T) {
    this.data = data
  }

  get Data (): T {
    return this.data
  }

  set Data (data: T) {
    this.data = data
  }
}
