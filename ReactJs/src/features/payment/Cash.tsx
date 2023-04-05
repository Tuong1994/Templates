import React from "react";
import * as Antd from "antd";
import { Langs } from "lang";

interface PaymentCashProps {
  langs: Langs;
}

const PaymentCash: React.FC<PaymentCashProps> = ({ langs }) => {
  return (
    <div className="payment-cash">
      <Antd.Typography className="cash-title">
        <Antd.Typography.Title level={4}>
          {langs?.payment.cash.title}
        </Antd.Typography.Title>
        <Antd.Typography.Text>
          {langs?.payment.cash.content}
        </Antd.Typography.Text>
      </Antd.Typography>

      <Antd.Row gutter={[16, 16]}>
        <Antd.Col xs={24} md={12} lg={12}>
          <Antd.Typography.Title level={5}>
            {langs?.footer.store.addr_1}
          </Antd.Typography.Title>
          <iframe
            className="cash-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2386097082845!2d106.68755831411661!3d10.793028261839984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cda31e0deb%3A0x5833773d583f8ff4!2zU-G7kSAyMywgMjUgxJDGsOG7nW5nIFRy4bqnbiBOaOG6rXQgRHXhuq10LCBUw6JuIMSQ4buLbmgsIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1673342168760!5m2!1svi!2s"
            loading="lazy"
          />
        </Antd.Col>

        <Antd.Col xs={24} md={12} lg={12}>
          <Antd.Typography.Title level={5}>
            {langs?.footer.store.addr_2}
          </Antd.Typography.Title>
          <iframe
            className="cash-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.201949377973!2d106.67618191411657!3d10.795839261788798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d677dab3d7%3A0xc3583be4c9df2fde!2zMTAyIE5ndXnhu4VuIMSQw6xuaCBDaMOtbmgsIFBoxrDhu51uZyAxNSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1673342250647!5m2!1svi!2s"
            loading="lazy"
          />
        </Antd.Col>
      </Antd.Row>
    </div>
  );
};

export default PaymentCash;
