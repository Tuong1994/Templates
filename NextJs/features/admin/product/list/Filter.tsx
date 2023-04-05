import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { Langs } from "@/lang";
import useOption from "@/common/repository/option";

interface AdminProductsFilterProps {
  langs: Langs;
}

const AdminProductsFilter: React.FC<AdminProductsFilterProps> = ({ langs }) => {
  const options = useOption();

  return (
    <Antd.Row gutter={[10, 10]}>
      <Antd.Col xs={24} sm={24 / 4} md={24 / 4} lg={24 / 4}>
        <Components.Fields.Search
          rootClassName="filter-control"
          placeholder={langs?.common.form.placeholder.productKeywords}
        />
      </Antd.Col>
      <Antd.Col xs={24} sm={24 / 4} md={24 / 4} lg={24 / 4}>
        <Components.Fields.Select
          rootClassName="filter-control"
          options={options.productStatus}
          placeholder={langs?.common.form.placeholder.selectProductStatus}
        />
      </Antd.Col>
      <Antd.Col xs={24} sm={24 / 4} md={24 / 4} lg={24 / 4}>
        <Components.Fields.Select
          rootClassName="filter-control"
          options={options.inventoryStatus}
          placeholder={langs?.common.form.placeholder.selectInventoryStatus}
        />
      </Antd.Col>
      <Antd.Col xs={24} sm={24 / 4} md={24 / 4} lg={24 / 4}>
        <Components.Fields.Select
          rootClassName="filter-control"
          options={options.productType}
          placeholder={langs?.common.form.placeholder.selectProductType}
        />
      </Antd.Col>
    </Antd.Row>
  );
};

export default AdminProductsFilter;
