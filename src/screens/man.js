/** @jsxImportSource @emotion/react */
import React from "react"
import { MainBackground, OptionButton, PickGarmentContainer, SelectGarmentSidebar, TotalPriceBar, BodySection, Gem, GoldCoin, BodyImg, PriceTag, Garment } from "../components/lib"
import manBody from '../images/man/body.png'
import manHair from '../images/short-male-hair-shape.png'
import tShirt from '../images/t-shirt.png'
import pants from '../images/pants.png'
import sportShoes from '../images/sport-shoe.png'
import styles from '../shared.module.css'
import hair1 from '../images/man/hair1.png'
import hair2 from '../images/man/hair2.png'
import hair3 from '../images/man/hair3.png'
import hair4 from '../images/man/hair4.png'
import pants1 from '../images/man/pants1.png'
import pants2 from '../images/man/pants2.png'
import pants3 from '../images/man/pants3.png'
import pants4 from '../images/man/pants4.png'
import pants5 from '../images/man/pants5.png'
import pants6 from '../images/man/pants6.png'
import shoes1 from '../images/man/shoes1.png'
import shoes2 from '../images/man/shoes2.png'
import shoes3 from '../images/man/shoes3.png'
import shoes4 from '../images/man/shoes4.png'
import shoes5 from '../images/man/shoes5.png'
import shoes6 from '../images/man/shoes6.png'
import tShirt1 from '../images/man/t-shirt1.png'
import tShirt2 from '../images/man/t-shirt2.png'
import tShirt3 from '../images/man/t-shirt3.png'
import tShirt4 from '../images/man/t-shirt4.png'
import tShirt5 from '../images/man/t-shirt5.png'
import tShirt6 from '../images/man/t-shirt5.png'

import '../App.css';
import Slider from "react-slick";
import { carouselSettings, garmentObject} from "../utils/misc"

const manOptions = {
  'hair': [garmentObject(hair1), garmentObject(hair2), garmentObject(hair3), garmentObject(hair4)],
  'pants': [garmentObject(pants1), garmentObject(pants2), garmentObject(pants3), garmentObject(pants4), garmentObject(pants5), garmentObject(pants6)],
  'shoes': [garmentObject(shoes1), garmentObject(shoes2), garmentObject(shoes3), garmentObject(shoes4), garmentObject(shoes5), garmentObject(shoes6)],
  't-shirt': [garmentObject(tShirt1), garmentObject(tShirt2), garmentObject(tShirt3), garmentObject(tShirt4), garmentObject(tShirt5), garmentObject(tShirt6)]
}

const sidebarOptions = {
  'hair': manHair,
  't-shirt': tShirt,
  'pants': pants,
  'shoes': sportShoes
}

export default function Man() {

  const [option, setOption] = React.useState('hair')
  const [garmentList, setGarmentList] = React.useState(manOptions[option])
  const activeGarment = (garment) => option === garment ? ` ${styles.activeGarment}` : ''

  React.useEffect(() => {
    setGarmentList(manOptions[option])
  }, [option])

  return (
    <MainBackground>
      <TotalPriceBar>
        <Gem/>
        <PriceTag css={{ marginRight: "3vw" }}>3.0K</PriceTag>
        <GoldCoin/>
        <PriceTag>5.0K</PriceTag>
      </TotalPriceBar>
      <BodySection>
        <BodyImg src={manBody} alt="man Body"/>
        <SelectGarmentSidebar>
          {Object.entries(sidebarOptions).map(([sidebarOption, image], index) =>
            <OptionButton key={index} backgroundImage={image} className={activeGarment(sidebarOption)} onClick={() => setOption(sidebarOption)}></OptionButton>
          )}
        </SelectGarmentSidebar>
      </BodySection>
      {/*end man body container */}
      <PickGarmentContainer>
        <h4 className={styles.optionSelected}>{option}</h4>
        <Slider {...carouselSettings} className={styles.garmentCarousel}>
          {garmentList.map((item, i) => (
            <div key={i} className={styles.selectGarmentContainer}>
              <Garment>
                <img src={item.garment} alt={`Man ${option} ${i}`}
                css={{width:'100%', height:'100%', objectFit: 'contain'}} />
              </Garment>
              <div css={{display: 'flex', alignItems:'center'}}>
                {React.createElement(item.priceIcon)}
                <PriceTag variant="secondary">{item.price}</PriceTag>
              </div>
            </div>
          ))}
        </Slider>
      </PickGarmentContainer>
    </MainBackground>
  );

}
