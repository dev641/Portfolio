declare module 'webpack' {
  interface NodeModule {
    hot: {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      accept(path?: string, callback?: () => void): void
    }
  }
}
