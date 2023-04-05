import React from "react";
import * as Components from "components";
import * as Antd from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import Images from "features/admin/product/form/Images";
import Info from "features/admin/product/form/Info";
import Status from "features/admin/product/form/Status";
import Group from "features/admin/product/form/Group";
import Spec from "features/admin/product/form/Spec";
import { Link } from "react-router-dom";
import useLangStore from "store/LangStore";
import useOption from "common/repository/option";

const AdminProductForm: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const type = useLangStore((state) => state.type);

  const options = useOption();

  const rules: Antd.FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
  ];

  const commonProps = { langs: langs, rules: rules };

  const breadcumbs: ItemType[] = [
    {
      title: (
        <Link to="/admin/product/list">{langs?.admin.product.list.title}</Link>
      ),
    },
    {
      title: (
        <Link to="/admin/product/form/1">
          {langs?.admin.product.form.addTitle}
        </Link>
      ),
    },
  ];

  const leftColItems = (
    <React.Fragment>
      <Images langs={langs} />
      <Info type={type} {...commonProps} />
    </React.Fragment>
  );

  const rightColItems = (
    <React.Fragment>
      <Status options={options} {...commonProps} />
      <Group {...commonProps} />
      <Spec {...commonProps} />
    </React.Fragment>
  );

  return (
    <Components.FormLayout
      rootClass="product-form"
      breadcumbs={breadcumbs}
      headerTitle={langs?.admin.product.form.addTitle}
      leftColItems={leftColItems}
      rightColItems={rightColItems}
    />
  );
};

export default AdminProductForm;
