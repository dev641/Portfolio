export default class Model<T> {
  private readonly data: T
  constructor (data: T) {
    this.data = data
  }

  get Data (): T {
    return this.data
  }
}
