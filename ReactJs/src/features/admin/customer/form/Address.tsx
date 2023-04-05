import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";

interface AddressProps {
  langs: Langs;
  rules: Antd.FormRule[];
}

const Address: React.FC<AddressProps> = ({
  langs,
  rules,
}) => {
  return (
    <Antd.Card rootClassName="form-card--border form-card" title={langs?.admin.customer.form.address}>
      <Components.Fields.Input
        required
        rules={rules}
        label={langs?.common.form.label.address}
      />

      <Components.Fields.Select
        required
        rules={rules}
        label={langs?.common.form.label.city}
      />

      <Components.Fields.Select
        required
        rules={rules}
        label={langs?.common.form.label.district}
      />

      <Components.Fields.Select
        required
        rules={rules}
        label={langs?.common.form.label.ward}
      />
    </Antd.Card>
  );
};

export default Address;
