/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type ResumeData } from '../types/Model'
import { type ResumeUpdator, type HtmlGenerator, type ThemeType } from '../types/util'
import btn from './components/buttons/btn'
import resumeCard from './components/cards/ResumeCard'
import sectionHeader from './components/cards/SectionHeader'
import View from './view'

export class ResumeView extends View<HTMLDivElement, ResumeData> {
  constructor (data: ResumeData, theme: ThemeType) {
    super('resume')
    this.render(data, theme)
  }

  private readonly ResumeGenerator: HtmlGenerator = ({ subHeading, heading, btns, education, experience }: ResumeData, theme: ThemeType | undefined) => {
    // // eslint-disable-next-line no-debugger
    // debugger
    const hidden = ({ status }: { status: string }): string => status !== 'active' ? 'hidden' : ''
    return `
     ${sectionHeader({ heading, subHeading })}
     <div class="resume__btn" id="resume__btn">
     ${btn(btns.ee, theme)}
     ${btn(btns.skills, theme)}
     </div>
      <div class="resume__body ${hidden(btns.ee)}" id="resume__body">
        <div class="resume__body-heading-education" id="resume__body-heading-education">
       <div class="resume__body-heading-education__timeLine" id="resume__body-heading-education__timeLine">${education.timeLine.start.year} - ${education.timeLine.end === 'Present' ? new Date().getFullYear : education.timeLine.end.year}</div>
       <div class="resume__body-heading-education__heading" id="resume__body-heading-education__heading">${education.heading}</div>
        </div>
        <div class="resume__body-heading-experience" id="resume__body-heading-experience">
           <div class="resume__body-heading-experience__timeLine" id="resume__body-heading-experience__timeLine">${experience.timeLine.start.year} - ${experience.timeLine.end === 'Present' ? new Date().getFullYear : experience.timeLine.end.year}</div>
           <div class="resume__body-heading-experience__heading" id="resume__body-heading-experience__heading">${experience.heading}</div>
        </div>
        <div class="resume__body-left resume-body ${theme === 0 ? 'dark' : 'light'}-body" id="resume__body-left">
          ${education.resume.map(resume => resumeCard(resume, theme)).join('\n')}
        </div>
        <div class="resume__body-right resume-body ${theme === 0 ? 'dark' : 'light'}-body" id="resume__body-right">
          ${experience.resume.map(resume => resumeCard(resume, theme)).join('\n')}
        </div>
        </div>
     <div class="resume__body ${hidden(btns.skills)}" id="resume__body">
     ${this.skillSetGenerator(education)}
     </div>
    `
  }

  render (data: ResumeData, theme: ThemeType): void {
    const html = this.ResumeGenerator(data, theme)
    this.parentElement.insertAdjacentHTML('afterbegin', html)
    this.renderSectionBreak()
  }

  update (data: ResumeData, theme: ThemeType): void {
    // debugger
    console.log(theme)
    // debugger
    const newMarkup = this.ResumeGenerator(data, theme)
    const newDom = document.createRange().createContextualFragment(newMarkup)
    const newElements = Array.from(newDom.querySelectorAll('*'))
    const curElements = Array.from(this.parentElement.querySelectorAll('*'))
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i]
      if (!newEl.isEqualNode(curEl)) {
        // // eslint-disable-next-line no-debugger
        // console.log(newEl, curEl)
        Array.from(newEl.attributes).forEach(attr => {
          // console.log(attr.name, attr.value, curEl.getAttribute(attr.name))
          curEl.setAttribute(attr.name, attr.value)
        })
      }
      // console.log(newEl, curEl)
    })

    // const resumeBodies = document.querySelectorAll('.resume__body')!
    // resumeBodies.forEach(body => {
    //   // eslint-disable-next-line no-debugger
    //   debugger
    //   if (body.classList.contains('hidden')) {
    //     body.classList.remove('hidden')
    //   } else body.classList.add('hidden')
    // })
  }

  changeResumeBody: (controlResumeBody: ResumeUpdator) => void = (controlResumeBody) => {
    const btn = document.querySelector('.resume__btn')! satisfies HTMLButtonElement
    btn.addEventListener('click', (e: Event) => {
      let target = e.target as HTMLElement
      target = target.closest('.button')!
      const name = target.dataset.name
      // // eslint-disable-next-line no-debugger
      // debugger
      controlResumeBody(name)
    })
  }

  private readonly skillSetGenerator: HtmlGenerator = (_) => {
    const skillSet = `
      <table><tr><td valign="top" width="33%">

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
}
