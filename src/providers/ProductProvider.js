import React from "react";
import useProductForm from '../hooks/useProductForm';
import ProductContext from '../contexts/ProductContext';
import ProductFormContext from '../contexts/ProductFormContext';

const ProductProvider = ({
  product = {},
  staticOptions = [],
  hiddenOptions = [],
  selectedVariant = 0,
  children
}) => {

  return (
    <ProductContext.Provider value={product}>
      <ProductFormContext.Provider value={useProductForm({
        product,
        staticOptions,
        hiddenOptions,
        selectedVariant
      })}>
        {children}
      </ProductFormContext.Provider>
    </ProductContext.Provider>
  )
}

export default ProductProvider;
