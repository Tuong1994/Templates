import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import CustomerInfo from "features/customer/Info";
import CustomerOrder from "features/customer/Order";
import CustomerComment from "features/customer/Comment";
import CustomerRate from "features/customer/Rate";
import CustomerForm from "features/customer/Form";
import useLangStore from "store/LangStore";

const Customer: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const breadcumbs: ItemType[] = [
    { title: <Link to="/">{langs?.header.menu.home}</Link> },
    { title: <Link to="/customer">{langs?.customer.title}</Link> },
  ];

  const tabs: Antd.TabsProps["items"] = [
    {
      key: "order",
      label: "Order",
      children: <CustomerOrder langs={langs} />,
    },
    {
      key: "comment",
      label: "Comment",
      children: <CustomerComment langs={langs} />,
    },
    {
      key: "rate",
      label: "Rate",
      children: <CustomerRate langs={langs} />,
    },
  ];

  return (
    <div className="customer">
      <Components.BodyHeader title={langs?.customer.title} items={breadcumbs} />

      <Antd.Row gutter={[16, 16]} className="customer-content">
        <Antd.Col xs={24} lg={7}>
          <CustomerInfo langs={langs} setIsOpen={setIsOpen} />
        </Antd.Col>

        <Antd.Col xs={24} lg={17}>
          <Components.Tabs items={tabs} centered />
        </Antd.Col>
      </Antd.Row>

      <CustomerForm langs={langs} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Customer;
