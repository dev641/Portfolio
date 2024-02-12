import { PROFILES } from "../constant/constant";
import { ProfilesData } from "../types/Model";
import { ComponentsClassName, HtmlGenerator, ThemeType } from "../types/util";
import profilesCard from "./components/cards/Profiles";
import sectionHeader from "./components/cards/SectionHeader";
import View from "./view";

const htmlGenerator: HtmlGenerator = ({sectionHeader: sectionHeaderData, profiles}: ProfilesData, theme: ThemeType) => {
    return `${sectionHeader(sectionHeaderData, theme)}${profilesCard(profiles, theme)}`;;
}

const componentClassNameGenerator: () => ComponentsClassName = () => {
  return {
    btns: `#${PROFILES} .button`,
    cards: `#${PROFILES} .card`
  }
}

export class ProfilesView extends View<HTMLDivElement, ProfilesData> {
    constructor (data: ProfilesData, theme: ThemeType) {
        super(PROFILES, htmlGenerator, componentClassNameGenerator())
        this.render(data, theme)
        // this.components = this.componentGenerator(componentClassNameGenerator())
    }
}