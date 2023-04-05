import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { IProduct } from "common/interface/product";
import { Link } from "react-router-dom";
import Products from "features/admin/order/form/Products";
import SelectProductModal from "features/admin/order/form/SelectProductModal";
import CreateProductModal from "features/admin/order/form/CreateProductModal";
import General from "features/admin/order/form/General";
import useLangStore from "store/LangStore";
import Customer from "features/admin/order/form/Customer";
import Setting from "features/admin/order/form/Setting";
import ShipmentModal from "features/admin/order/form/ShipmentModal";
import OrderCreator from "features/admin/order/form/OrderCreator";

const AdminOrderForm: React.FC<{}> = (props) => {
  const type = useLangStore((state) => state.type);

  const langs = useLangStore((state) => state.langs);

  const [isSelect, setIsSelect] = React.useState<boolean>(false);

  const [isCreate, setIsCreate] = React.useState<boolean>(false);

  const [isShipment, setIsShipment] = React.useState<boolean>(false);

  const rules: Antd.FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
  ];

  const breadcumbs: ItemType[] = [
    {
      title: (
        <Link to="/admin/order/list">{langs?.admin.order.list.title}</Link>
      ),
    },
    {
      title: (
        <Link to="/admin/order/form/1">{langs?.admin.order.form.addTitle}</Link>
      ),
    },
  ];

  const products: IProduct[] = [
    {
      id: "001",
      name: "Product 1",
      price: 2000000,
      quanity: 1,
    },
    {
      id: "002",
      name: "Product 2",
      price: 5000000,
      quanity: 1,
    },
  ];

  const leftColItems = (
    <React.Fragment>
      <Products
        type={type}
        langs={langs}
        products={products}
        setIsSelect={setIsSelect}
        setIsCreate={setIsCreate}
      />
      <General type={type} langs={langs} products={products} />
    </React.Fragment>
  );

  const rightColItems = (
    <React.Fragment>
      <Customer langs={langs} />
      <Setting langs={langs} rules={rules} setIsShipment={setIsShipment} />
      <OrderCreator langs={langs} />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Components.FormLayout
        rootClass="order-form"
        breadcumbs={breadcumbs}
        headerTitle={langs?.admin.order.form.addTitle}
        leftColItems={leftColItems}
        rightColItems={rightColItems}
      />

      <SelectProductModal
        type={type}
        langs={langs}
        products={products}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
      />

      <CreateProductModal
        type={type}
        langs={langs}
        rules={rules}
        isCreate={isCreate}
        setIsCreate={setIsCreate}
      />

      <ShipmentModal
        langs={langs}
        rules={rules}
        isShipment={isShipment}
        setIsShipment={setIsShipment}
      />
    </React.Fragment>
  );
};

export default AdminOrderForm;
