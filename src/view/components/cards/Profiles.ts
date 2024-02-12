import { ProfilesCard, render } from "../../../types/cards";

{{ 
         
}}

const profilesCard: render = ({socialConnects}: ProfilesCard, theme) => {
    const socialConnectsHtml = socialConnects.map(({src, name}) => `
        <div class="profiles-card__image" id="profiles-card__image">
            <img src="${src}" alt="${name}-image">
        </div>
    `).join('')
    return `
        <div class="profiles-card card ${theme}-card" id="profiles-card">
            ${socialConnectsHtml}
        </div>
    `
}

export default profilesCard