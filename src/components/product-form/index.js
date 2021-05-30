import React, {
  useCallback,
  useContext
} from "react";
import { size } from '../../utils/variables';
import ChicCTA from '../../components/chic-cta';
import ShopContext from '../../contexts/ShopContext';
import ProductFormContext from "../../contexts/ProductFormContext";
import {
  FORM,
  CTA
} from './styles';
import CartFlyoutContext from "../../contexts/CartFlyoutContext";
import VariantSelector from "../variant-selector";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import ProductOptionSelector from "../product-option-selector";
import SwatchGrid from "../swatch-grid";
import ProductContext from "../../contexts/ProductContext";

// markup
const ProductForm = ({
  children
}) => {
  const {
    product,
    addToCart,
    removeFromCart
  } = useContext(ProductFormContext), {
    openFlyout
  } = useContext(CartFlyoutContext), {
    emptyCart
  } = useContext(ShopContext), {
    options
  } = product;

  const onClick = async (e) => {
    await addToCart(e);
    openFlyout();
  }

  return (
    <FORM>
      <VariantSelector
        isHidden={true}
        theme={'chic'}
      >
        {
          arrayToComponentSiblings(options, (option, i) => (
            <ProductOptionSelector key={i} name={option.name}>
              <SwatchGrid values={option.values} name={option.name} type={`label`} />
            </ProductOptionSelector>
          ))
        }
      </VariantSelector>
      <CTA>
        <ChicCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={onClick}
        >Add to Cart</ChicCTA>
      </CTA>
      <CTA>
        <ChicCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={removeFromCart}
        >Remove Cart</ChicCTA>
      </CTA>
      <CTA>
        <ChicCTA
          type="submit"
          backgroundColor={`#FFFFFF`}
          textColor={`#000000`}
          maxWidth={`${size.mobileXL / 16}em`}
          onClick={emptyCart}
        >Clear Cart</ChicCTA>
      </CTA>
    </FORM>
  )
}

export default ProductForm;
