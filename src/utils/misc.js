import gem from '../images/gem.png'
import money from '../images/gem.png'

const randomPrice = () => Math.floor(Math.random() * 100)
const priceType = () => [gem, money][Math.floor(Math.random() * 2)]

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2
};

function garmentObject(image) {
  return {
    garment: image,
    price: randomPrice(),
    priceType: priceType()
  }
}

export {carouselSettings, garmentObject}
