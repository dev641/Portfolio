import { PortfolioView } from "../view/PortfolioView";
import { PortfolioModel } from "./../model/PortfolioModel";
import { HeaderController } from "./HeaderController";
export default class PortfolioController {
  private PortfolioModel: PortfolioModel;
  private PortfolioView: PortfolioView;

  constructor(portfolioModel: PortfolioModel, portfolioView: PortfolioView) {
    this.PortfolioModel = portfolioModel;
    this.PortfolioView = portfolioView;
    this.start();
  }
  start() {
    new HeaderController(
      this.PortfolioModel.Header,
      this.PortfolioView.HeaderView
    );
  }
}
