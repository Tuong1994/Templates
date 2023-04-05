import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";
import { IOptions } from "common/interface/option";

interface StatusProps {
  langs: Langs;
  options: IOptions;
  rules: Antd.FormRule[];
}

const Status: React.FC<StatusProps> = ({ langs, options, rules }) => {
  return (
    <Antd.Card
      title={langs?.admin.product.form.status}
      rootClassName="form-card--border form-card"
    >
      <Components.Fields.Select
        required
        rules={rules}
        options={options.productStatus}
        label={langs?.common.form.label.productStatus}
      />

      <Components.Fields.Select
        required
        rules={rules}
        options={options.inventoryStatus}
        label={langs?.common.form.label.inventoryStatus}
      />

      <Components.Fields.Input
        required
        rules={rules}
        label={langs?.common.form.label.inventory}
      />

      <Antd.Row justify="space-between">
        <Antd.Col lg={12}>
          <Components.Fields.Checkbox>
            {langs?.common.form.label.bestSale}
          </Components.Fields.Checkbox>
        </Antd.Col>

        <Antd.Col lg={12}>
          <Components.Fields.Checkbox>
            {langs?.common.form.label.outstand}
          </Components.Fields.Checkbox>
        </Antd.Col>
      </Antd.Row>
    </Antd.Card>
  );
};

export default Status;
