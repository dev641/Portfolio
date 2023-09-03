import { headerData } from "../types/menu";

export default abstract class View<T extends HTMLElement> {
  protected parentElement: T;
  constructor(parentElementId: string) {
    this.parentElement = document.getElementById(parentElementId)! as T;
  }
  abstract render(data: headerData): void;
}
