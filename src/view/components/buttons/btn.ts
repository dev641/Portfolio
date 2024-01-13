import { type render } from '../../../types/cards'
import { type ThemeType } from '../../../types/util'

const btn: render = ({ name, status }: { name: string, status: string }, theme: ThemeType) => {
  return `
      <button class="button ${theme}-btn resume__btn-${name} ${status}" id="button" data-name=${name}>${name.split('_').join(' ')}</button>
  `
}

export default btn
