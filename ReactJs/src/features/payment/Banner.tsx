import React from "react";
import * as Antd from "antd";
import { Langs } from "lang";
import { HashLink as Link } from "react-router-hash-link";

interface PaymentBannerProps {
  langs: Langs;
}

const PaymentBanner: React.FC<PaymentBannerProps> = ({ langs }) => {
  return (
    <Antd.Card className="payment-banner">
      <Antd.Typography className="banner-content">
        <Antd.Typography.Title level={2} className="content-title">
          {langs?.payment.banner.title}
        </Antd.Typography.Title>

        <Antd.Typography.Text className="content-text">
          {langs?.payment.banner.content}
        </Antd.Typography.Text>

        <Antd.Divider />

        <Link smooth to="#methods">
          <Antd.Button ghost className="content-link">
            {langs?.payment.banner.link}
          </Antd.Button>
        </Link>
      </Antd.Typography>
    </Antd.Card>
  );
};

export default PaymentBanner;
