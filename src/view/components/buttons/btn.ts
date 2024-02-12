import { type render } from '../../../types/cards'

const btn: render = ({ name, status }: { name: string, status: string }, theme) => {
  return `
      <button class="button ${theme}-btn resume__btn-${name} ${status}" id="button" data-name=${name}>${name.split('_').join(' ')}</button>
  `
}

export default btn
