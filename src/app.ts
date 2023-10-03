import Portfolio from './controller/PortfolioController'
import PortfolioModel from './model/PortfolioModel'
import './styles/main.scss'
import { PortfolioView } from './view/PortfolioView'
import { inject } from '@vercel/analytics'

inject()
// eslint-disable-next-line no-new
new Portfolio(PortfolioModel, new PortfolioView(PortfolioModel.Data, PortfolioModel.Theme))
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions

console.log(PortfolioModel.Resume)
