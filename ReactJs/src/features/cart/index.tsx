import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { IProduct } from "common/interface/product";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { ITableColumns } from "common/interface/table";
import { sumPrice } from "utils/helpers";
import { Link } from "react-router-dom";
import CartInfo from "../../features/cart/Info";
import CartForm from "features/cart/Form";
import useLangStore from "store/LangStore";
import utils from "utils";

interface CartProps {}

export type StepStatus = "wait" | "process" | "finish" | "error";

const Cart: React.FC<CartProps> = (props) => {
  const type = useLangStore((state) => state.type);
  const langs = useLangStore((state) => state.langs);

  const [stepOne, setStepOne] = React.useState<StepStatus>("wait");
  const [stepTwo, setStepTwo] = React.useState<StepStatus>("wait");
  const [stepThree, setStepThree] = React.useState<StepStatus>("wait");

  const breadcumbs: ItemType[] = [
    { title: <Link to="/">{langs?.header.menu.home}</Link> },
    { title: <Link to="/cart">{langs?.cart.title}</Link> },
  ];

  const steps: Antd.StepProps[] = [
    {
      title: langs?.cart.steps.step_1,
      status: stepOne,
    },
    {
      title: langs?.cart.steps.step_2,
      status: stepTwo,
    },
    {
      title: langs?.cart.steps.step_3,
      status: stepThree,
    },
  ];

  const products: IProduct[] = [
    {
      id: "1",
      name: "Product 1",
      price: 25000000,
      quanity: 1,
    },
    {
      id: "2",
      name: "Product 2",
      price: 5000000,
      quanity: 2,
    },
  ];

  const columns: ITableColumns<IProduct> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: langs?.common.table.productName,
      dataIndex: "name",
      key: "name",
    },
    {
      title: langs?.common.table.price,
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <React.Fragment>{utils.formatMoney(type, price)}</React.Fragment>
      ),
    },
    {
      title: langs?.common.table.quanity,
      dataIndex: "quanity",
      key: "quanity",
    },
  ];

  const totalPay = sumPrice(products);

  const commonProps = {
    type: type,
    langs: langs,
    products: products,
    columns: columns,
    totalPay: totalPay,
  };

  return (
    <div className="cart">
      <Components.BodyHeader items={breadcumbs} title={langs?.cart.title} />

      <Components.Steps items={steps} rootClass="mb-5" />

      {stepOne === "wait" ? (
        <CartInfo {...commonProps} setStepOne={setStepOne} />
      ) : (
        <CartForm
          {...commonProps}
          setStepTwo={setStepTwo}
          setStepThree={setStepThree}
        />
      )}
    </div>
  );
};

export default Cart;
