import React from "react";
import ProductList from "features/product/list";
import ProductDetail from "features/product/detail";
import usePath from "hooks/usePath";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = (props) => {
  const params = usePath();

  let com = null;

  switch (params) {
    case "detail": {
      com = <ProductDetail />;
      break;
    }
    default:
      com = <ProductList />;
  }

  return com;
};

export default ProductPage;
