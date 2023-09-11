import { type Institute, type UserDetails, type render, type Company } from './../../../types/cards.d'

const resumeCard: render = (data: UserDetails) => {
  const {
    name,
    location,
    timeLine:
      {
        start: {
          month: startMonth,
          year: startYear
        },
        end
      },
    description
  } = data
  const Institue = {
    degree: '',
    cgpa: '',
    courses: ''
  }
  const Company = {
    designation: '',
    skillset: ''
  }
  if (data.kind === 'Institute') {
    const { degree: { degree, stream }, cgpa: { cgpa, total }, courses } = data as Institute
    Institue.degree = `
    <div class="resume-card__degree heading" id="resume-card__degree">${degree} from ${stream}</div>
    `
    Institue.cgpa = `
      <div class="resume-card__cgpa" id="resume-card__cgpa">Secured ${cgpa} out of ${total} CGPA in ${degree}</div>
    `
    Institue.courses = courses !== undefined ? courses.map(item => `<li class="resume-card__list-item" id="resume-card__list-item">${item}</li>`)?.join('') : ''
  } else if (data.kind === 'Company') {
    const { designation, skillSet } = data as Company
    Company.designation = `
      <div class="resume-card__designation heading" id="resume-card__designation">${designation}</div>
    `
    Company.skillset = `
      <div class="resume-card__skillset" id="resume-card__skillset">Worked on ${skillSet.join(', ')}</div>
    `
  }
  const html = `
      <div class="resume-card card dark-card" id="resume-card">
            ${data.kind === 'Institute' ? Institue.degree : Company.designation}
            <div class="resume-card__location btn" id="resume-card__location">${location}</div>
            <div class="resume-card__name" id="resume-card__name">${name} (${startMonth}, ${startYear}-${end === 'Present' ? 'Present' : `${end.month}, ${end.year}`})</div>
            <hr>
            ${data.kind === 'Institute' ? Institue.cgpa : ''}
            <div class="resume-card__description" id="resume-card__description">${description}</div>
            <ul class="resume-card__list" id="resume-card__list">
              ${data.kind === 'Institute' ? Institue.courses : Company.skillset}
            </ul>
       </div> 
    `
  return html
}

export default resumeCard
