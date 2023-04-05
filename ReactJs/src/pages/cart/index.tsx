import Cart from "features/cart";
import usePath from "hooks/usePath";
import React from "react";

const CartPage: React.FC<{}> = (props) => {
  const param = usePath();

  let com = null;

  switch (param) {
    default:
      com = <Cart />;
  }

  return com;
};

export default CartPage;
