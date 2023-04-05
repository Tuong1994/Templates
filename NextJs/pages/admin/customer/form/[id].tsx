import React from "react";
import * as Components from "@/components";
import * as Antd from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import useLangStore from "@/store/LangStore";
import Account from "@/features/admin/customer/form/Account";
import Personal from "@/features/admin/customer/form/Personal";
import Role from "@/features/admin/customer/form/Role";
import Address from "@/features/admin/customer/form/Address";
import Link from "next/link";

const AdminCustomerForm: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const rules: Antd.FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
  ];

  const commonProps = { langs: langs, rules: rules };

  const breadcumbs: ItemType[] = [
    {
      title: (
        <Link href="/admin/customer/list">
          {langs?.admin.customer.list.title}
        </Link>
      ),
    },
    {
      title: (
        <Link href="/admin/customer/form/1">
          {langs?.admin.customer.form.addTitle}
        </Link>
      ),
    },
  ];

  const leftColItems = (
    <React.Fragment>
      <Account {...commonProps} />
      <Personal {...commonProps} />
    </React.Fragment>
  );

  const rightColItems = (
    <React.Fragment>
      <Address {...commonProps} />
      <Role {...commonProps} />
    </React.Fragment>
  );

  return (
    <Components.FormLayout
      rootClass="customer-form"
      breadcumbs={breadcumbs}
      headerTitle={langs?.admin.customer.form.addTitle}
      leftColItems={leftColItems}
      rightColItems={rightColItems}
    />
  );
};

export default AdminCustomerForm;
