import { HeaderView } from './HeaderView'
import { type ModelData } from '../types/Model'
import { HomeView } from './HomeView'
import { ExperienceView } from './ExperienceView'
import { EducationView } from './EducationView'
import { ResumeView } from './ResumeView'
import { type ThemeType } from '../types/util'
import { PortfolioSectionView } from './PortfolioSectionView'
import { ThemeEnum } from '../util/Enum'
import { customElementsGenerators } from '../util/util'
import { HEADER, PORTFOLIO_SECTION, RESUME } from '../constant/constant'

// const customElementsGeneratorsList: ({container: string, theme: ThemeType}) => string[] | undefined = ({container, theme}) => customElementsGenerators({container, theme})?.map(ele => ele.className)

const customElementsGeneratorsList: (
  options: { container: string; theme: ThemeType }
) => string[] | undefined = ({ container, theme }) => {
  const customElementsInfo = customElementsGenerators({ container, theme })
  
  // Check if customElementsInfo is defined before using map
  return customElementsInfo?.map(ele => ele.className)
}
export class PortfolioView {
  private readonly header: HeaderView
  private readonly home: HomeView
  private readonly experience: ExperienceView
  private readonly education: EducationView
  private readonly resume: ResumeView
  private readonly portfolio: PortfolioSectionView
  constructor (data: ModelData, theme: ThemeType) {
    this.header = new HeaderView(data.header, theme)
    this.home = new HomeView(data.home, theme)
    this.experience = new ExperienceView(data.experience, theme)
    this.education = new EducationView(data.education, theme)
    this.resume = new ResumeView(data.resume, theme)
    this.portfolio = new PortfolioSectionView(data.portfolio, theme)
  }

  get Header (): HeaderView {
    return this.header
  }

  get Home (): HomeView {
    return this.home
  }

  get Experience (): ExperienceView {
    return this.experience
  }

  get Education (): EducationView {
    return this.education
  }

  get Resume (): ResumeView {
    return this.resume
  }

  get PortfolioSection (): PortfolioSectionView {
    return this.portfolio
  }

  changeTheme: (theme: ThemeType) => void = (theme) => {
    const prevTheme = this.Header.ThemeElement.dataset.theme === 'dark' ? ThemeEnum.dark : ThemeEnum.light
    this.Header.updateTheme({curTheme: theme, prevTheme, elementClassName: customElementsGeneratorsList({container: HEADER, theme})})
    this.Home.updateTheme({curTheme: theme, prevTheme})
    this.Education.updateTheme({curTheme: theme, prevTheme})
    this.Experience.updateTheme({curTheme: theme, prevTheme})
    this.Resume.updateTheme({curTheme: theme, prevTheme, elementClassName: customElementsGeneratorsList({container: RESUME, theme})})
    this.PortfolioSection.updateTheme({curTheme: theme, prevTheme, elementClassName: customElementsGeneratorsList({container: PORTFOLIO_SECTION, theme})})
    this.Header.modifyThemeDataset(theme)
  }
}
