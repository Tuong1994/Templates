import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";
import { renderGender } from "utils/helpers";
import utils from "utils";

interface OrderCreatorProps {
  langs: Langs;
}

const OrderCreator: React.FC<OrderCreatorProps> = ({ langs }) => {
  const rowStyle = {
    marginBottom: "10px",
  };

  return (
    <Antd.Card
      title={langs?.admin.order.form.createdBy}
      className="form-card--border"
    >
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
        title={`${langs?.common.form.label.gender} : `}
        content={renderGender(1, langs)}
      />
    </Antd.Card>
  );
};

export default OrderCreator;
