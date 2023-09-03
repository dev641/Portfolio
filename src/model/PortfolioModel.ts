import { ModelData } from "../types/util";
import Header, { HeaderModel } from "./HeaderModel";

export class PortfolioModel {
  private header: HeaderModel;
  constructor() {
    this.header = Header;
  }
  get Header(): HeaderModel {
    return this.header;
  }
  get Data(): ModelData {
    const header = this.Header.Data;
    return {
      header,
    };
  }
}

export default new PortfolioModel();
