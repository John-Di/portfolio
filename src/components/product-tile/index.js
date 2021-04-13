import React from "react";
import ObjectTile from '../object-tile';
import { size } from '../../utils/variables';
import {
  PRICE,
  BODY,
  CTA_WRAPPER
} from './styles';
import FancyCTA from '../../components/fancy-cta';

export default function ProductTile({
  heading,
  image,
  description,
  children,
  price,
  maxWidth
}) {
  return (
    <ObjectTile
      className="product-tile"
      heading={heading}
      image={image}
      body={description}
      maxWidth={`${size.mobileS / 16}em`}
      value={price && <PRICE>{price}</PRICE>}
    >
      {children && (<BODY>{children}</BODY>)}
      <CTA_WRAPPER>
        <FancyCTA
        >Add to Cart</FancyCTA>
      </CTA_WRAPPER>
    </ObjectTile>
  );
}
