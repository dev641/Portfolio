import { type ThemeType } from './../types/util.d'
/* eslint-disable @typescript-eslint/ban-types */

export interface Theme {
  changeTheme: (theme: ThemeType) => void
}

export class ThemeEvent {
  private readonly themeQueue: ThemeType[] = []
  private readonly subscribers: Function[] = []

  subscribe (callback: Function): void {
    this.subscribers.push(callback)
  }

  enqueueTheme (theme: ThemeType): void {
    this.themeQueue.push(theme)
    this.notifySubscribers()
  }

  private notifySubscribers (): void {
    while (this.themeQueue.length > 0) {
      const theme = this.themeQueue.shift()
      this.subscribers.forEach(subscriber => subscriber(theme))
    }
  }
}

export default new ThemeEvent()
