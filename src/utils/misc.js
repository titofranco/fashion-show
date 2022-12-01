import gem from '../images/gem.png'
import money from '../images/money.png'

const gemRandomPrice = () => Math.floor(Math.random() * 1000)
const goldRandomPrice = () => Math.floor(Math.random() * 100) / 10 + ' K'

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2
};

function garmentObject(image) {
  const index = Math.floor(Math.random() * 2)
  return {
    garment: image,
    price: index === 0 ? gemRandomPrice() : goldRandomPrice(),
    priceType: [gem, money][index]
  }
}

export {carouselSettings, garmentObject}
