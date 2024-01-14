import { PORTFOLIO_EXPAND_SECTION } from "../constant/constant";
import { PortfolioExpandCard } from "../types/cards";
import { ComponentsClassName, HtmlGenerator, ThemeType } from "../types/util";
// import { customElementsGenerators } from "../util/util";
import portfolioExpandCard from "./components/cards/PortfolioExpandCard";
import View from "./view";

const expandCardGenerator: HtmlGenerator = (data, theme) => `${portfolioExpandCard(data, theme)}`

const componentClassNameGenerator: (theme: ThemeType) => ComponentsClassName = (_) => {
  return {
    btns: `#${PORTFOLIO_EXPAND_SECTION} .button`,
    cards: `#${PORTFOLIO_EXPAND_SECTION} .${PORTFOLIO_EXPAND_SECTION}-card`,
    // elements: customElementsGenerators({container: PORTFOLIO_EXPAND_SECTION, theme})?.map(ele => ele.name)
  }
}
export class PortfolioExpandView extends View<HTMLDivElement, PortfolioExpandCard> {
    constructor (data: PortfolioExpandCard, theme: ThemeType) {
    super(`${PORTFOLIO_EXPAND_SECTION}`, expandCardGenerator , componentClassNameGenerator(theme))
    this.render(data, theme)
    // this.components = this.componentGenerator(componentClassNameGenerator(theme))
  }
}