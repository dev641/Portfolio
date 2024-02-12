import { type Institute, type UserDetails, type render, type Company } from './../../../types/cards.d'

const eeCard: render = (data: UserDetails, theme) => {
  const {
    name,
    image,
    location,
    timeLine: {
      start: {
        month: startMonth,
        year: startYear
      },
      end
    }
  } = data
  let Institue = ''
  let Company = ''
  if (data.kind === 'Institute') {
    const { degree: { degree, stream }, cgpa: { cgpa, total } } = data as Institute
    Institue = `
      <div class="eecard__description-bottom__degree" id="eecard__description-bottom__degree">${degree} from ${stream}</div>
      <div class="eecard__description-bottom__cgpa" id="eecard__description-bottom__cgpa">Secured ${cgpa} out of ${total} CGPA in ${degree}</div>
    `
  } else if (data.kind === 'Company') {
    const { designation, skillSet } = data as Company
    Company = `
      <div class="eecard__description-bottom__designation" id="eecard__description-bottom__designation">${designation}</div>
      <div class="eecard__description-bottom__skillset" id="eecard__description-bottom__skillset">Worked on ${skillSet.join(', ')}</div>
    `
  }
  const html = `
      <div class="eecard card ${theme}-card" id="eecard">
            <div class="eecard__image" id="eecard__image">
              <img src="${image?.src}" alt="${image?.name}-logo" class="eecard__img" id="eecard__img">
            </div>
            <div class="eecard__description" id="eecard__description">
              <div class="eecard__description-top" id="eecard__description-top">
                <div class="eecard__description-top__timeline" id="eecard__description-top__timeline">${startMonth}, ${startYear}-${end === 'Present' ? 'Present' : `${end.month}, ${end.year}`}</div>
                <div class="eecard__description-top__name" id="eecard__description-top__name">${name}</div>
              </div>
              <div class="eecard__description-bottom" id="eecard__description-bottom">
                ${data.kind === 'Institute' ? Institue : Company}
              </div> 
             </div>
            <div  class="eecard__btn btn" id="eecard__btn">${location}</div>
      </div>
    `
  return html
}

export default eeCard
