// import { HeaderModel } from "../model/HeaderModel";
import { HeaderController } from "../controller/HeaderController";
import { HeaderModel } from "../model/HeaderModel";
import { HeaderView } from "./HeaderView";
export const header = () => {
  const model = new HeaderModel();
  const view = new HeaderView(model.Data);
  return new HeaderController(model, view);
};
export default class Portfolio {
  // private header: HeaderController;
  constructor() {
    header();
  }
}
