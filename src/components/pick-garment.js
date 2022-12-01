/** @jsxImportSource @emotion/react */
import React from "react";
import Slider from "react-slick";
import { carouselSettings} from "../utils/misc"
import '../App.css';
import { PickGarmentContainer, Garment, PriceTag } from "./lib";
import styles from '../shared.module.css'

export default function PickGarment({ garmentList, option, variant }) {
  return (
    <PickGarmentContainer>
      <h4 className={styles.optionSelected}>{option}</h4>
      <Slider {...carouselSettings} className={styles.garmentCarousel}>
        {garmentList.map((item, i) => (
          <div key={i} className={styles.selectGarmentContainer}>
            <Garment>
              <img
                src={item.garment}
                alt={`${variant} ${option} ${i}`}
                css={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Garment>
            <div css={{ display: "flex", alignItems: "center" }}>
              {React.createElement(item.priceIcon)}
              <PriceTag variant="secondary">{item.price}</PriceTag>
            </div>
          </div>
        ))}
      </Slider>
    </PickGarmentContainer>
  );
}
