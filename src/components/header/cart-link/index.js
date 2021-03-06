import React, {
  useContext
} from "react";
import SiteThemeContext from "../../../contexts/SiteThemeContext";
import PageContext from "../../../contexts/PageContext";
import ShopContext from "../../../contexts/ShopContext";
import CartIcon from '../../../images/svgs/cart.svg';
import BasicContrast from "../../../utils/BasicContrast";
import {
  CART,
  ICON
} from './styles';
import LocationContext from "../../../contexts/LocationContext";
import CartFlyoutContext from "../../../contexts/CartFlyoutContext";

const nav = [
  {
    href: "/resume/",
    label: () => "Resume"
  },
  {
    href: "/style-guide/",
    label: () => "Style Guide"
  },
  {
    href: "/products/color-cookie-hoodie",
    label: prod => prod ? prod.title : 'Color Cookie Hoodie'
  },
  {
    href: "/products/full-strawberry-tee",
    label: prod => prod ? prod.title : 'Full Strawberry Tee'
  }
];

const CartLink = () => {

  const {
    cartCount
  } = useContext(ShopContext), {
    selectMenuItem
  } = useContext(PageContext), {
    primaryColor
  } = useContext(SiteThemeContext), {
    pathContains
  } = useContext(LocationContext), {
    isOpen,
    toggleFlyout
  } = useContext(CartFlyoutContext);

  const onClick = e => {
    e.preventDefault();
    toggleFlyout();
  }

  return (
    <CART
      to={`/cart/`}
      href={`/cart/`}
      onClick={onClick}
      partiallyActive={true}
      activeClassName='active'
      state={{
        isActive: pathContains('/cart'),
        partiallyActive: true,
        cartCount: +cartCount,
        cartIsEmpty: cartCount === 0,
        primaryColor
      }}
    >
      <ICON>
        <CartIcon />
      </ICON>
    </CART>
  )
}

export default CartLink;