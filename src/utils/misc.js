import { Gem, GoldCoin } from '../components/lib'

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
    priceIcon: [Gem, GoldCoin][index]
  }
}

export {carouselSettings, garmentObject}
