import Portfolio from "./controller/PortfolioController";
import PortfolioModel from "./model/PortfolioModel";
import "./styles/main.scss";
import { PortfolioView } from "./view/PortfolioView";

new Portfolio(PortfolioModel, new PortfolioView(PortfolioModel.Data));
