import React, { useContext } from "react";
import {
  QUICKCART,
  ITEMS,
  HEADER,
  H1,
  ITEM,
  FOOTER,
  TOTALS,
  CART,
  ICON
} from './styles';
import ShopContext from "../../contexts/ShopContext";
import CartFlyoutContext from "../../contexts/CartFlyoutContext";
import CloseIcon from '../../images/svgs/x.svg'
import LineItemList from "../line-item-list";

export default function QuickCart({
  innerPadding = false
}) {
  const {
    store,
    lineItems,
    checkoutURL
  } = useContext(ShopContext), {
    ref,
    isOpen,
    footerHeight,
    closeFlyout
  } = useContext(CartFlyoutContext), {
    subtotalPrice
  } = store.checkout;

  const onClick = e => {
    e.preventDefault();
    closeFlyout();
  };

  return (
    <QUICKCART
      isOpen={isOpen}
      innerPadding={innerPadding}
    >
      <HEADER>
        <H1>Cart</H1>
        <ICON type="button" onClick={onClick}>
          <CloseIcon />
        </ICON>
      </HEADER>
      <LineItemList />
      <FOOTER ref={ref} footerHeight={footerHeight}>
        <TOTALS>
          <dt>Subtotal</dt>
          <dd>{`$${subtotalPrice}`}</dd>
        </TOTALS>
        <CART to={`/cart/`} href={`/cart/`}>Go to Cart</CART>
        {/* <CHECKOUT href={checkoutURL} target="_blank">Checkout</CHECKOUT> */}
      </FOOTER>
    </QUICKCART>
  );
}
