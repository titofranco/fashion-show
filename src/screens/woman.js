/** @jsxImportSource @emotion/react */
import React from "react"
import { OptionButton, MainBackground, TotalPriceBar, SelectGarmentSidebar, PickGarmentContainer, BodySection, Gem, GoldCoin, BodyImg, PriceTag, Garment } from "../components/lib"
import womanBody from '../images/woman/body.png'
import womanHair from '../images/long-wavy-hair-variant.png'
import tShirt from '../images/t-shirt.png'
import pants from '../images/pants.png'
import highHeels from '../images/high-heels.png'
import styles from '../shared.module.css'
import blackHair from '../images/woman/black-hair.png'
import blondHair from '../images/woman/blond-hair.png'
import brownHair from '../images/woman/brown-hair.png'
import greyHair from '../images/woman/grey-hair.png'
import redHair from '../images/woman/red-hair.png'
import pants1 from '../images/woman/pants1.png'
import pants2 from '../images/woman/pants2.png'
import pants3 from '../images/woman/pants3.png'
import pants4 from '../images/woman/pants4.png'
import shoes1 from '../images/woman/shoes1.png'
import shoes2 from '../images/woman/shoes2.png'
import shoes3 from '../images/woman/shoes3.png'
import shoes4 from '../images/woman/shoes4.png'
import shoes5 from '../images/woman/shoes5.png'
import shoes6 from '../images/woman/shoes6.png'
import top1 from '../images/woman/top1.png'
import top2 from '../images/woman/top2.png'
import top3 from '../images/woman/top3.png'
import top4 from '../images/woman/top4.png'
import top5 from '../images/woman/top5.png'
import '../App.css';
import Slider from "react-slick";
import { carouselSettings, garmentObject} from "../utils/misc"

const womanOptions = {
  'hair': [garmentObject(blackHair), garmentObject(blondHair), garmentObject(brownHair),garmentObject(greyHair), garmentObject(redHair) ],
  'pants': [garmentObject(pants1), garmentObject(pants2), garmentObject(pants3), garmentObject(pants4)],
  'shoes': [garmentObject(shoes1), garmentObject(shoes2), garmentObject(shoes3), garmentObject(shoes4), garmentObject(shoes5), garmentObject(shoes6)],
  'top': [garmentObject(top1), garmentObject(top2), garmentObject(top3), garmentObject(top4), garmentObject(top5)]
}

const sidebarOptions = {
  'hair': womanHair,
  'top': tShirt,
  'pants': pants,
  'shoes': highHeels
}

export default function Woman() {

  const [option, setOption] = React.useState('hair')
  const [garmentList, setGarmentList] = React.useState(womanOptions[option])
  const activeGarment = (garment) => option === garment ? ` ${styles.activeGarment}` : ''

  React.useEffect(() => {
    setGarmentList(womanOptions[option])
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
        <BodyImg src={womanBody} alt="Woman Body" />
        <SelectGarmentSidebar>
          {Object.entries(sidebarOptions).map(([sidebarOption, image], index) =>
            <OptionButton key={index} backgroundImage={image} className={activeGarment(sidebarOption)} onClick={() => setOption(sidebarOption)}></OptionButton>
          )}
        </SelectGarmentSidebar>
      </BodySection>
      {/*end woman body container */}
      <PickGarmentContainer>
        <h4 className={styles.optionSelected}>{option}</h4>
        <Slider {...carouselSettings} className={styles.garmentCarousel}>
          {garmentList.map((item, i) => (
            <div key={i} className={styles.selectGarmentContainer}>
              <Garment>
                <img src={item.garment} alt={`Woman ${option} ${i}`}
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
