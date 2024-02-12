import { type Logo, type PortfolioExpandCard, type render } from './../../../types/cards.d'

const skillListGenerator: render = (skills: Logo[]) => {
  return skills.map(({ logoClass }) => `<li class="portfolio-expand-card__skills-list__item skill-icons" id="portfolio-expand-card__skills-list__item"><i class="${logoClass.join(' ')}"></i></li>`).join('\n')
}
const portfolioExpandCard: render = ({
  heading,
  feature,
  image: {
    name: imageName,
    src: imageSrc
  },
  description,
  skillSet,
  likeBtn: {
    name: {
      name: likeName,
      logoClass: likeLogo
    }
  },
  project: {
    link: {
      src: projectSrc
    },
    logo: { logoClass: projectLogo }
  },
  close: {
    logoClass: closeLogo
  }
}: PortfolioExpandCard, theme) => {
  return `
    <div class="portfolio-expand-card card ${theme}-card" id="portfolio-expand-card">
          <div class="portfolio-expand-card__image" id="portfolio-expand-card__image">
            <img src="${imageSrc}" alt="${imageName}">
          </div>
          <div class="portfolio-expand-card__feature" id="portfolio-expand-card__feature">feature - ${feature}</div>
          <div class="portfolio-expand-card__heading" id="portfolio-expand-card__heading">${heading}</div>
          <div class="portfolio-expand-card__description" id="portfolio-expand-card__description">${description}</div>
          <div class="portfolio-expand-card__skills" id="portfolio-expand-card__skills">
           <ul class="portfolio-expand-card__skills-list" id="portfolio-expand-card__skills-list">
           ${skillListGenerator(skillSet)}
           </ul>
           </div>
           <a data-isclicked="false" class="portfolio-expand-card__like-btn btn" id="portfolio-expand-card__like-btn">${likeName} THIS <i class="${likeLogo.join(' ')}"></i> </a>
           <a href="${projectSrc}" class="portfolio-expand-card__project-link-btn btn" id="portfolio-expand-card__project-link-btn">VIEW THIS PROJECT <i class="${projectLogo.join(' ')}"></i></a>   
         <div class="portfolio-expand-card__close btn" id="portfolio-expand-card__btn-close"><i class="${closeLogo.join(' ')}"></i></div>
        </div>
  `
}

export default portfolioExpandCard
