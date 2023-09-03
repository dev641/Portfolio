import { HeaderView } from "./HeaderView";
import { ModelData } from "../types/util";
export class PortfolioView {
  private headerView: HeaderView;
  constructor(data: ModelData) {
    this.headerView = new HeaderView(data.header);
  }

  get HeaderView() {
    return this.headerView;
  }
}
