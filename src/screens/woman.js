/** @jsxImportSource @emotion/react */
import React from "react"
import { OptionButton } from "../components/lib"
import selectBackground from "../images/select-bg.png"
import womanBody from '../images/womanBody.png'
import womanHair from '../images/long-wavy-hair-variant.png'
import tShirt from '../images/t-shirt.png'
import pants from '../images/pants.png'
import highHeels from '../images/high-heels.png'
import styles from '../shared.module.css'
import gem from '../images/gem.png'
import money from '../images/money.png'
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
import shoes2 from '../images/woman/shoes1.png'
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

export default function Woman() {

  const randomPrice = () => Math.floor(Math.random() * 100)
  const priceType = () => [gem, money][Math.floor(Math.random() * 2)]
  const activeGarment = (garment) => option === garment ? ` ${styles.activeGarment}` : ''

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  function garmentObject(image) {
    return {
      garment: image,
      price: randomPrice(),
      priceType: priceType()
    }
  }

  const options = {
    'hair': [garmentObject(blackHair), garmentObject(blondHair), garmentObject(brownHair),garmentObject(greyHair), garmentObject(redHair) ],
    'pants': [garmentObject(pants1), garmentObject(pants2), garmentObject(pants3), garmentObject(pants4)],
    'shoes': [garmentObject(shoes1), garmentObject(shoes2), garmentObject(shoes3), garmentObject(shoes4), garmentObject(shoes5), garmentObject(shoes6)],
    'top': [garmentObject(top1), garmentObject(top2), garmentObject(top3), garmentObject(top4), garmentObject(top5)]
  }

  const [option, setOption] = React.useState('hair')
  const [garmentList, setGarmentList] = React.useState(options[option])

  React.useEffect(() => {
    setGarmentList(options[option])
  }, [option])


  return (
    <main
      css={{
        backgroundImage: `url(${selectBackground})`,
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={styles.actionBar}
        css={{
          height: "6vh",
          width: "43%",
          position: "relative",
          top: "3vh",
          left: "3vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={gem} alt="gem" width="18px" height="18px" />
        <span className={styles.priceTag}>3.0K</span>
        <img
          src={money}
          alt="money"
          width="18px"
          height="18px"
          css={{ marginLeft: "3vw" }}
        />
        <span className={styles.priceTag}>5.0K</span>
      </div>
      <div
        css={{
          height: "62vh",
          width: "100vw",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <img
          src={womanBody}
          alt="Woman Body"
          css={{
            height: "inherit",
            width: "75vw",
            marginTop: "2vh",
          }}
        />
        <div
          className={styles.actionBar}
          css={{
            height: "30vh",
            width: "48px",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            marginRight: "5vw",
          }}
        >
          <OptionButton backgroundImage={womanHair} className={activeGarment('hair')} onClick={() => setOption('hair')}></OptionButton>
          <OptionButton backgroundImage={tShirt} className={activeGarment('top')} onClick={() => setOption('top')}></OptionButton>
          <OptionButton backgroundImage={pants} className={activeGarment('pants')} onClick={() => setOption('pants')}></OptionButton>
          <OptionButton backgroundImage={highHeels} className={activeGarment('shoes')} onClick={() => setOption('shoes')} ></OptionButton>
        </div>
      </div>
      {/*end woman body container */}
      <div
        css={{
          boxSizing: "border-box",
          width: "100%",
          height: "31.5vh",
          background: "rgba(70, 47, 153, 0.6)",
          border: "2px solid #A79FE1",
          borderRadius: "40px 40px 0 0",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: 'column'
        }}
      >
        <h4 className={styles.optionSelected}>{option}</h4>
        <Slider {...settings} className={styles.garmentCarousel}>
          {garmentList.map((item, i) => (
            <div key={i} className={styles.selectItemContainer}>
              <div css={{
                width:'16vw',
                height:'10vh',
                display: 'flex',
                justifyContent: 'center',
                }}>
                  <img src={item.garment}
                  css={{width:'100%', height:'100%', objectFit: 'cover'}}
                  alt="woman hair 1"/></div>
              <div css={{display: 'flex', alignItems:'center'}}>
                <img src={item.priceType} alt="gem" width="18px" height="18px" />
                <span className={styles.priceTag} css={{color: '#A79FE1'}}>{item.price}K</span>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </main>
  );

}
