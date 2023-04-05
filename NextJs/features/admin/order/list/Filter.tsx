import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { Langs } from "@/lang";
import useOption from "@/common/repository/option";

interface AdminOrdersFilterProps {
  langs: Langs;
}

const AdminOrdersFilter: React.FC<AdminOrdersFilterProps> = ({ langs }) => {
  const options = useOption();

  return (
    <Antd.Row gutter={[10, 10]}>
      <Antd.Col xs={24} sm={24 / 3} md={24 / 3} lg={24 / 3}>
        <Components.Fields.Search
          rootClassName="filter-control"
          placeholder={langs?.common.form.placeholder.orderKeywords}
        />
      </Antd.Col>
      <Antd.Col xs={24} sm={24 / 3} md={24 / 3} lg={24 / 3}>
        <Components.Fields.Select
          rootClassName="filter-control"
          options={options.paymentMethod}
          placeholder={langs?.common.form.placeholder.selectPaymentMethod}
        />
      </Antd.Col>
      <Antd.Col xs={24} sm={24 / 3} md={24 / 3} lg={24 / 3}>
        <Components.Fields.Select
          rootClassName="filter-control"
          options={options.orderStatus}
          placeholder={langs?.common.form.placeholder.selectOrderStatus}
        />
      </Antd.Col>
    </Antd.Row>
  );
};

export default AdminOrdersFilter;
