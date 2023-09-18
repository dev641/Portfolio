export default abstract class View<T extends HTMLElement, U> {
  protected parentElement: T
  constructor (parentElementId: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.parentElement = document.getElementById(parentElementId)! as T
  }

  abstract render (data: U): void
  // abstract update (data: U): void
  renderSectionBreak (): void {
    const hr: string = '<hr class="section-break">'
    this.parentElement.insertAdjacentHTML('beforeend', hr)
  }
}
