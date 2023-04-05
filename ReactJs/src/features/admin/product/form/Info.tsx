import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";
import utils from "utils";

interface InfoProps {
  langs: Langs;
  type: number;
  rules: Antd.FormRule[];
}

const Info: React.FC<InfoProps> = ({ langs, type, rules }) => {
  return (
    <Antd.Card className="form-card--border form-info" title={langs?.admin.product.form.info}>
      <Components.Fields.Input
        required
        rules={rules}
        label={langs?.common.form.label.productName}
      />

      <Components.Fields.Input
        required
        rules={rules}
        label={langs?.common.form.label.initialCapital}
      />

      <Components.Fields.Select
        required
        rules={rules}
        label={`${langs?.common.form.label.profit} (%)`}
      />

      <Antd.Divider />

      <Antd.Space className="info-price">
        <Antd.Typography.Text>
          {langs?.common.form.label.price} :
        </Antd.Typography.Text>
        <Antd.Typography.Title level={4} className="price-number">
          {utils.formatMoney(type, 1000000)}
        </Antd.Typography.Title>
      </Antd.Space>
    </Antd.Card>
  );
};

export default Info;
