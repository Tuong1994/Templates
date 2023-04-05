import * as Antd from "antd";
import { Langs } from "lang";
import { IProduct } from "common/interface/product";
import { EOrderStatus, EPaymentMethod } from "common/enum/order";
import { EGender, ERole } from "common/enum/user";
import { EInventoryStatus, EProductStatus } from "common/enum/product";
import { EShipmentStatus } from "common/enum/shipment";

export const sumPrice = (products: IProduct[]) => {
  return products.reduce((t, p) => {
    return (t += p.price * (p.quanity ?? 0));
  }, 0);
};

export const sumQuanity = (products: IProduct[]) => {
  return products.reduce((t, p) => {
    return (t += p.quanity ?? 0);
  }, 0);
};

export const renderGender = (gender: number, langs: Langs) => {
  return gender === EGender.MALE
    ? langs?.common.option.male
    : langs?.common.option.female;
};

export const renderRole = (role: number, langs: Langs) => {
  return role === ERole.ADMIN
    ? langs?.common.option.admin
    : langs?.common.option.user;
};

export const renderProductStatus = (status: number, langs: Langs) => {
  return status === EProductStatus.ACTIVE ? (
    <Antd.Tag color="green">{langs?.common.option.active}</Antd.Tag>
  ) : (
    <Antd.Tag color="orange">{langs?.common.option.draft}</Antd.Tag>
  );
};

export const renderProductType = (p: IProduct, langs: Langs) => {
  return p.bestSale || p.outstand ? (
    <Antd.Row>
      {p.bestSale && (
        <Antd.Col>
          <Antd.Tag color="red-inverse">
            {langs?.common.option.bestSale}
          </Antd.Tag>
        </Antd.Col>
      )}
      {p.outstand && (
        <Antd.Col>
          <Antd.Tag color="blue-inverse">
            {langs?.common.option.outstand}
          </Antd.Tag>
        </Antd.Col>
      )}
    </Antd.Row>
  ) : (
    "--"
  );
};

export const renderInventoryStatus = (status: number, langs: Langs) => {
  return status === EInventoryStatus.IN_STOCK ? (
    <Antd.Tag color="green">{langs?.common.option.inStock}</Antd.Tag>
  ) : (
    <Antd.Tag color="red">{langs?.common.option.outOfStock}</Antd.Tag>
  );
};

export const renderPaymentMethods = (method: number, langs: Langs) => {
  const methods: any = {
    [EPaymentMethod.CASH]: langs?.order.paymentMethod.cash,
    [EPaymentMethod.COD]: langs?.order.paymentMethod.cod,
    [EPaymentMethod.TRANSFER]: langs?.order.paymentMethod.transfer,
  };
  return (
    <Antd.Tag color="blue" style={{ marginInlineEnd: 0 }}>
      {methods[method]}
    </Antd.Tag>
  );
};

export const renderOrderStatus = (status: number, langs: Langs) => {
  return status === EOrderStatus.WAITING ? (
    <Antd.Tag color="orange" style={{ marginInlineEnd: 0 }}>
      {langs?.order.status.waiting}
    </Antd.Tag>
  ) : (
    <Antd.Tag color="green" style={{ marginInlineEnd: 0 }}>
      {langs?.order.status.finished}
    </Antd.Tag>
  );
};

export const renderShipmentStatus = (status: number, langs: Langs) => {
  return status === EShipmentStatus.DELIVERING ? (
    <Antd.Tag color="orange">{langs?.common.option.delivering}</Antd.Tag>
  ) : (
    <Antd.Tag color="green">{langs?.common.option.delivered}</Antd.Tag>
  );
};
