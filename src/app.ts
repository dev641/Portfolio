import Portfolio from './controller/PortfolioController'
import PortfolioModel from './model/PortfolioModel'
import './styles/main.scss'
import { PortfolioView } from './view/PortfolioView'

// eslint-disable-next-line no-new
new Portfolio(PortfolioModel, new PortfolioView(PortfolioModel.Data))
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions

console.log(PortfolioModel.Experience, PortfolioModel.Education)
