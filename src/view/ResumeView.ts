/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { RESUME } from '../constant/constant'
import { type ResumeData } from '../types/Model'
import { type HtmlUpdator, type HtmlGenerator, type ThemeType, type ThemeChanger, ComponentsClassName } from '../types/util'
import { customElementsGenerators, themeClassGenerator, themeUpdator } from '../util/util'
import btn from './components/buttons/btn'
import resumeCard from './components/cards/ResumeCard'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'

const ResumeGenerator: HtmlGenerator = ({ sectionHeader: sectionHeaderData, btns, education, experience }: ResumeData, theme: ThemeType) => {
  const skillSetGenerator: HtmlGenerator = (_, theme) => {
    const skillSet = `
      <table class="${theme}"><tr><td valign="top" width="33%">

      ### Front End

      <div align="center">  
      <a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
      <a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
      <a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
      <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
      <a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
      <a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>  
      <a href="https://webpack.js.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/webpack-original.svg" alt="Webpack" height="50" /></a>  
      <a href="https://www.tailwindcss.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="Tailwind CSS" height="50" /></a>  
      <a href="https://mui.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mui.png" alt="Material UI" height="50" /></a>  
      <a href="https://sass-lang.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/sass-original.svg" alt="Sass" height="50" /></a>  
      <a href="https://www.elastic.co/kibana/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/kibana.png" alt="Kibana" height="50" /></a>  
      <a href="https://jquery.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/jquery.png" alt="jQuery" height="50" /></a>  
      <a href="https://wordpress.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/wordpress.png" alt="WordPress" height="50" /></a>  
      </div>

      </td><td valign="top" width="33%">

      ### Back End / Database

      <div align="center">  
      <a href="https://www.djangoproject.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/django-original.svg" alt="Django" height="50" /></a>  
      <a href="https://www.java.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" alt="Java" height="50" /></a>  
      <a href="https://www.python.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" /></a>  
      <a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
      <a href="https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html#:~:text=The%20Spring%20Expression%20Language%20(SpEL,and%20basic%20string%20templating%20functionality." target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/springio-icon.svg" alt="Spring" height="50" /></a>  
      <a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>  
      <a href="https://www.postgresql.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" height="50" /></a>  
      <a href="https://www.mysql.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="50" /></a>  
      <a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="50" /></a>  
      <a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
      <a href="https://hadoop.apache.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/apache_hadoop-icon.svg" alt="Hadoop" height="50" /></a>  
      <a href="https://www.apachefriends.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/xampp.png" alt="XAMPP" height="50" /></a>  
      <a href="https://www.elastic.co/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/elasticsearch.png" alt="Elastic Search" height="50" /></a>  
      </div>

      </td><td valign="top" width="33%">

      ### Others Technology

      <div align="center">  
      <a href="https://www.cplusplus.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" alt="C++" height="50" /></a>  
      <a href="https://www.cprogramming.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/c-original.svg" alt="C" height="50" /></a>  
      <a href="https://www.tensorflow.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/tensorflow-icon.svg" alt="TensorFlow" height="50" /></a>  
      <a href="https://www.adobe.com/in/products/photoshop.html" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/photoshop-plain.svg" alt="Photoshop" height="50" /></a>  
      <a href="https://opencv.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/opencv-icon.svg" alt="OpenCV" height="50" /></a>  
      <a href="https://www.adobe.com/in/products/xd.html" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/adobexd.png" alt="Adobe XD" height="50" /></a>  
      <a href="https://www.apachefriends.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/xampp.png" alt="XAMPP" height="50" /></a>  
      <a href="https://keras.io/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/keras.png" alt="Keras" height="50" /></a>  
      <a href="https://www.elastic.co/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/elasticsearch.png" alt="Elastic Search" height="50" /></a>  
      <a href="https://about.gitlab.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/gitlab.svg" alt="GitLab" height="50" /></a>  
      <a href="https://www.figma.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" /></a>  
      <a href="https://www.linux.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/linux-original.svg" alt="Linux" height="50" /></a>  
      </div>

      </td></tr></table>

    `
    return skillSet
  }

  const hidden = ({ status }: { status: string }): string => status !== 'active' ? 'hidden' : ''
  return `
     ${sectionHeader(sectionHeaderData)}
     <div class="${RESUME}__btn" id="${RESUME}__btn">
     ${btn(btns.ee, theme)}
     ${btn(btns.skills, theme)}
     </div>
      <div class="${RESUME}__body ${hidden(btns.ee)}" id="${RESUME}__body">
        <div class="${RESUME}__body-heading-education" id="${RESUME}__body-heading-education">
       <div class="${RESUME}__body-heading-education__timeLine" id="${RESUME}__body-heading-education__timeLine">${education.timeLine.start.year} - ${education.timeLine.end === 'Present' ? new Date().getFullYear : education.timeLine.end.year}</div>
       <div class="${RESUME}__body-heading-education__heading" id="${RESUME}__body-heading-education__heading">${education.heading}</div>
        </div>
        <div class="${RESUME}__body-heading-experience" id="${RESUME}__body-heading-experience">
           <div class="${RESUME}__body-heading-experience__timeLine" id="${RESUME}__body-heading-experience__timeLine">${experience.timeLine.start.year} - ${experience.timeLine.end === 'Present' ? new Date().getFullYear : experience.timeLine.end.year}</div>
           <div class="${RESUME}__body-heading-experience__heading" id="${RESUME}__body-heading-experience__heading">${experience.heading}</div>
        </div>
        <div class="${RESUME}__body-left ${RESUME}-body ${theme}-body" id="${RESUME}__body-left">
          ${education.resume.map(resume => resumeCard(resume, theme)).join('\n')}
        </div>
        <div class="${RESUME}__body-right ${RESUME}-body ${theme}-body" id="${RESUME}__body-right">
          ${experience.resume.map(resume => resumeCard(resume, theme)).join('\n')}
        </div>
        </div>
     <div class="${RESUME}__body ${hidden(btns.skills)}" id="${RESUME}__body">
     ${skillSetGenerator(education, theme)}
     </div>
    `
}

const componentClassNameGenerator: (theme: ThemeType) => ComponentsClassName = (theme) => {
  const elements = customElementsGenerators({container: RESUME, theme})?.map(el => el.name)
  return {
    btns: `#${RESUME} .button`,
    cards: `#${RESUME} .card`,
    elements
  }
}

export class ResumeView extends View<HTMLDivElement, ResumeData> {
  constructor (data: ResumeData, theme: ThemeType) {
    super(RESUME, ResumeGenerator, componentClassNameGenerator(theme))
    this.render(data, theme)
    // this.components = this.componentGenerator(componentClassNameGenerator(theme))
  }

  changeTheme: ThemeChanger = (prevTheme, curTheme) => {
    const themeResumeBodyGenerator = themeClassGenerator(prevTheme, curTheme)
    const resumeBody = document.querySelectorAll(`.${RESUME}-body`)
    resumeBody.forEach(body => { themeUpdator(body as HTMLDivElement, themeResumeBodyGenerator(`body`)) })
    this.update(curTheme)
  }

  changeResumeBody: (controlResumeBody: HtmlUpdator) => void = (controlResumeBody) => {
    const btn = document.querySelector(`.${RESUME}__btn`)! satisfies HTMLButtonElement
    btn.addEventListener('click', (e: Event) => {
      let target = e.target as HTMLElement
      target = target.closest('.button')!
      const name = target.dataset.name
      controlResumeBody(name)
    })
  }
}
