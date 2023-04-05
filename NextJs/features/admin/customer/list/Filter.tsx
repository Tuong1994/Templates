import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { Langs } from "@/lang";
import useOption from "@/common/repository/option";

interface AdminCustomersFilterProps {
  langs: Langs;
}

const AdminCustomersFilter: React.FC<AdminCustomersFilterProps> = ({
  langs,
}) => {
  const options = useOption();

  return (
    <Antd.Row gutter={[10, 10]}>
      <Antd.Col xs={24} sm={24 / 3} lg={24 / 3}>
        <Components.Fields.Search
          rootClassName="filter-control"
          placeholder={langs?.common.form.placeholder.customerKeywords}
        />
      </Antd.Col>
      <Antd.Col xs={24} sm={24 / 3} lg={24 / 3}>
        <Components.Fields.Select
          rootClassName="filter-control"
          options={options.gender}
          placeholder={langs?.common.form.placeholder.selectGender}
        />
      </Antd.Col>
      <Antd.Col xs={24} sm={24 / 3} lg={24 / 3}>
        <Components.Fields.Select
          rootClassName="filter-control"
          options={options.role}
          placeholder={langs?.common.form.placeholder.selectRole}
        />
      </Antd.Col>
    </Antd.Row>
  );
};

export default AdminCustomersFilter;
