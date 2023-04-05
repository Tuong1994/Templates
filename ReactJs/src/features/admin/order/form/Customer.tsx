import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";
import { renderGender } from "utils/helpers";
import utils from "utils";

interface CustomerProps {
  langs: Langs;
}

const Customer: React.FC<CustomerProps> = ({ langs }) => {
  const rowStyle = {
    marginBottom: "10px",
  };

  return (
    <Antd.Card
      title={langs?.admin.order.form.customer}
      rootClassName="form-card form-card--border"
    >
      <Components.Fields.Select />

      <Antd.Divider />

      <Components.InfoRow
        style={rowStyle}
        title={`${langs?.common.form.label.fullName} : `}
        content="Nhâm Bổn Tường"
      />

      <Components.InfoRow
        style={rowStyle}
        title={`${langs?.common.form.label.phone} : `}
        content={utils.formatPhoneNumber("0793229970")}
      />

      <Components.InfoRow
        style={rowStyle}
        title={`${langs?.common.form.label.email} : `}
        content="nbtuong1994@gmail.com"
      />

      <Components.InfoRow
        style={rowStyle}
        title={`${langs?.common.form.label.birthday} : `}
        content="28/11/1994"
      />

      <Components.InfoRow
        style={rowStyle}
        title={`${langs?.common.form.label.gender} : `}
        content={renderGender(1, langs)}
      />

      <Components.InfoRow
        style={rowStyle}
        title={`${langs?.common.form.label.address} : `}
        content="79/24/13 Âu Cơ P.14 Q.11 HCM"
      />
    </Antd.Card>
  );
};

export default Customer;
