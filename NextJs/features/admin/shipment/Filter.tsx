import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { Langs } from "@/lang";
import useOption from "@/common/repository/option";

interface AdminShipmentsFilterProps {
  langs: Langs;
}

const AdminShipmentsFilter: React.FC<AdminShipmentsFilterProps> = ({
  langs,
}) => {
  const options = useOption();

  return (
    <Antd.Row gutter={[10, 10]}>
      <Antd.Col xs={24} sm={12} md={12} lg={12}>
        <Components.Fields.Search
          rootClassName="filter-control"
          placeholder={langs?.common.form.placeholder.shipmentKeywords}
        />
      </Antd.Col>
      <Antd.Col xs={24} sm={12} md={12} lg={12}>
        <Components.Fields.Select
          rootClassName="filter-control"
          options={options.shipmentStatus}
          placeholder={langs?.common.form.placeholder.selectShipmentStatus}
        />
      </Antd.Col>
    </Antd.Row>
  );
};

export default AdminShipmentsFilter;
