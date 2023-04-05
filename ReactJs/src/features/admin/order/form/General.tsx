import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import {
  renderOrderStatus,
  renderPaymentMethods,
  sumPrice,
  sumQuanity,
} from "utils/helpers";
import { Langs } from "lang";
import { IProduct } from "common/interface/product";
import utils from "utils";

interface GeneralProps {
  type: number;
  langs: Langs;
  products: IProduct[];
}

const General: React.FC<GeneralProps> = ({ type, langs, products }) => {
  const totalPay = sumPrice(products);

  const totalQuanity = sumQuanity(products);

  const rowStyle = {
    marginBottom: "10px",
  };

  return (
    <Antd.Card rootClassName="form-card--border">
      <Antd.Row gutter={20} className="w-full" justify="space-between">
        <Antd.Col span={11}>
          <Components.InfoRow
            style={rowStyle}
            title={`${langs?.common.form.label.quanity} :`}
            content={`${totalQuanity} ${langs?.common.unit.product}`}
          />

          <Components.InfoRow
            style={rowStyle}
            title={`${langs?.common.form.label.paymentMethods} :`}
            content={renderPaymentMethods(1, langs)}
          />
          <Components.InfoRow
            style={rowStyle}
            title={`${langs?.common.form.label.status} :`}
            content={renderOrderStatus(1, langs)}
          />
          <Components.InfoRow
            style={rowStyle}
            title={`${langs?.common.form.label.shipmentFee} :`}
            content={utils.formatMoney(type, 0)}
          />
          <Components.InfoRow
            title={`${langs?.common.form.label.totalPay} :`}
            content={utils.formatMoney(type, totalPay)}
          />
        </Antd.Col>

        <Antd.Divider type="vertical" />

        <Antd.Col span={11}>
          <Components.Fields.TextArea
            rows={6}
            label={langs?.common.form.label.note}
          />
        </Antd.Col>
      </Antd.Row>
    </Antd.Card>
  );
};

export default General;
