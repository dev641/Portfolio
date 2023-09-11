import { type render, type ImageCard } from './../../../types/cards.d'

const imageCard: render = ({ image: { name, src } }: ImageCard) => {
  return `
    <div class="image-card card dark-card" id="image-card">
      <img src="${src}" alt="${name}-image">
    </div>
  `
}

export default imageCard
