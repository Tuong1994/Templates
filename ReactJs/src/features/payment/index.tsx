import React from "react";
import * as Components from "components";
import * as Antd from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import PaymentBanner from "features/payment/Banner";
import PaymentMethods from "features/payment/Methods";
import PaymentTranfer from "features/payment/Transfer";
import PaymentCash from "features/payment/Cash";
import PaymentCod from "features/payment/Cod";
import useLangStore from "store/LangStore";

const Payment: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const breadcumbs: ItemType[] = [
    { title: <Link to="/">{langs?.header.menu.home}</Link> },
    { title: <Link to="/payment">{langs?.header.menu.payment}</Link> },
  ];

  return (
    <div className="payment">
      <Components.BodyHeader title="" items={breadcumbs} />

      <PaymentBanner langs={langs} />

      <PaymentMethods langs={langs} />

      <Antd.Divider />

      <PaymentTranfer langs={langs} />

      <PaymentCash langs={langs} />

      <PaymentCod langs={langs} />
    </div>
  );
};

export default Payment;
