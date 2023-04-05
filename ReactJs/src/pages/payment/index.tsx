import Payment from "features/payment";
import usePath from "hooks/usePath";
import React from "react";

const PaymentPage: React.FC<{}> = (props) => {
  const param = usePath();

  let com = null;

  switch (param) {
    default:
      com = <Payment />;
  }

  return com;
};

export default PaymentPage;
