import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import {
  FaCreditCard,
  FaCashRegister,
  FaTruckMoving,
  FaCheck,
} from "react-icons/fa";
import { StepStatus } from ".";
import { Langs } from "lang";
import { IShipment } from "common/interface/shipment";
import { IProduct } from "common/interface/product";
import { ITableColumns } from "common/interface/table";
import utils from "utils";

interface CartFormProps {
  type: number;
  langs: Langs;
  products: IProduct[];
  columns: ITableColumns<IProduct>;
  totalPay: number;
  setStepTwo: React.Dispatch<React.SetStateAction<StepStatus>>;
  setStepThree: React.Dispatch<React.SetStateAction<StepStatus>>;
}

const CartForm: React.FC<CartFormProps> = ({
  type,
  langs,
  products,
  columns,
  totalPay,
  setStepTwo,
  setStepThree,
}) => {
  const [paymentMethod, setPaymentMethod] = React.useState<string | string[]>(
    []
  );

  const renderExtra = (k: string) => {
    return paymentMethod.includes(k) ? <FaCheck /> : <></>;
  };

  const initialValues: IShipment = {
    customerFirstName: "",
    customerLastName: "",
    customerEmail: "",
    customerPhone: "",
    cityCode: "",
    districtCode: "",
    wardCode: "",
    address: "",
  };

  return (
    <Antd.Form
      initialValues={initialValues}
      layout="vertical"
      className="cart-form"
    >
      <Antd.Row gutter={[16, 16]}>
        <Antd.Col xs={24} lg={14}>
          {/* PAYMENT INFOMATION */}
          <Antd.Card title={langs?.cart.paymentInfo} className="form-card">
            <Antd.Row gutter={16}>
              <Antd.Col xs={24} lg={12}>
                {/* FIRST NAME */}
                <Components.Fields.Input
                  required
                  name="customerFirstName"
                  label={langs?.common.form.label.firstName}
                />
              </Antd.Col>

              {/* LAST NAME */}
              <Antd.Col xs={24} lg={12}>
                <Components.Fields.Input
                  required
                  name="customerLastName"
                  label={langs?.common.form.label.lastName}
                />
              </Antd.Col>
            </Antd.Row>

            <Antd.Row gutter={16}>
              <Antd.Col xs={24} md={12} lg={12}>
                {/* PHONE */}
                <Components.Fields.Input
                  required
                  name="customerPhone"
                  label={langs?.common.form.label.phone}
                />
              </Antd.Col>

              {/* EMAIL */}
              <Antd.Col xs={24} md={12} lg={12}>
                <Components.Fields.Input
                  required
                  name="customerEmail"
                  label={langs?.common.form.label.email}
                />
              </Antd.Col>
            </Antd.Row>

            <Antd.Row gutter={16}>
              {/* CITY */}
              <Antd.Col xs={24} md={12} lg={12}>
                <Components.Fields.Select
                  required
                  name="cityCode"
                  label={langs?.common.form.label.city}
                />
              </Antd.Col>

              {/* DISTRICT */}
              <Antd.Col xs={24} md={12} lg={12}>
                <Components.Fields.Select
                  required
                  name="districtCode"
                  label={langs?.common.form.label.district}
                />
              </Antd.Col>
            </Antd.Row>

            <Antd.Row gutter={16}>
              {/* WARD */}
              <Antd.Col xs={24} md={12} lg={12}>
                <Components.Fields.Select
                  required
                  name="wardCode"
                  label={langs?.common.form.label.ward}
                />
              </Antd.Col>

              {/* ADDRESS */}
              <Antd.Col xs={24} md={12} lg={12}>
                <Components.Fields.Input
                  required
                  name="address"
                  label={langs?.common.form.label.address}
                />
              </Antd.Col>
            </Antd.Row>

            {/* NOTE */}
            <Components.Fields.TextArea
              rows={4}
              label={langs?.common.form.label.note}
            />
          </Antd.Card>
        </Antd.Col>

        {/* ORDER INFOMATION */}
        <Antd.Col xs={24} lg={10}>
          <Antd.Card title={langs?.cart.yourOrder} className="mb-5 form-card">
            <Components.Table data={products} columns={columns} />
            <Antd.Divider />
            <Antd.Row justify="space-between" className="my-3">
              <Antd.Col>
                <Antd.Typography.Text className="text-base font-semibold">
                  {langs?.cart.totalPay}:
                </Antd.Typography.Text>
              </Antd.Col>
              <Antd.Col>
                <Antd.Typography.Text className="text-lg font-semibold">
                  {utils.formatMoney(type, totalPay)}
                </Antd.Typography.Text>
              </Antd.Col>
            </Antd.Row>
          </Antd.Card>

          {/* PAYMENT METHODS */}
          <Antd.Card
            title={langs?.cart.paymentMethods.title}
            className="form-card"
          >
            {paymentMethod.length === 0 && (
              <Antd.Typography.Text className="card-note">
                {langs?.cart.paymentMethods.note}
              </Antd.Typography.Text>
            )}

            <Antd.Collapse
              accordion
              className="w-full bg-white card-collapse"
              onChange={(k) => setPaymentMethod(k)}
            >
              {/* TRANSFER */}
              <Antd.Collapse.Panel
                key="transfer"
                showArrow={false}
                className="collapse-item"
                header={
                  <Antd.Space align="center">
                    <FaCreditCard />
                    <span>{langs?.order.paymentMethod.transfer}</span>
                  </Antd.Space>
                }
                extra={renderExtra("transfer")}
              >
                <Antd.Typography.Paragraph>
                  {langs?.cart.paymentMethods.transfersDetail.content}
                </Antd.Typography.Paragraph>
                <Antd.List size="small">
                  <Antd.List.Item className="item-account">
                    <span>VIB BANK</span>
                    <span>CÔNG TY TNHH THƯƠNG MẠI PCZONE</span>
                    <span>HCM - Quận Phú Nhuận</span>
                    <span className="font-semibold">0157.244.47</span>
                  </Antd.List.Item>
                  <Antd.List.Item className="item-account">
                    <span>VIETCOMBANK</span>
                    <span>CÔNG TY TNHH THƯƠNG MẠI PCZONE</span>
                    <span>HCM - Quận 11</span>
                    <span className="font-semibold">111.112.86.86.666</span>
                  </Antd.List.Item>
                </Antd.List>
              </Antd.Collapse.Panel>

              {/* COD */}
              <Antd.Collapse.Panel
                key="cod"
                showArrow={false}
                className="collapse-item"
                header={
                  <Antd.Space align="center">
                    <FaTruckMoving />
                    <span>{langs?.order.paymentMethod.cod}</span>
                  </Antd.Space>
                }
                extra={renderExtra("cod")}
              >
                <Antd.Typography.Text>
                  {langs?.cart.paymentMethods.codDetail}
                </Antd.Typography.Text>
              </Antd.Collapse.Panel>

              {/* CASH */}
              <Antd.Collapse.Panel
                key="cash"
                showArrow={false}
                className="collapse-item"
                header={
                  <Antd.Space align="center">
                    <FaCashRegister />
                    <span>{langs?.order.paymentMethod.cash}</span>
                  </Antd.Space>
                }
                extra={renderExtra("cash")}
              >
                <Antd.Typography.Text>
                  {langs?.cart.paymentMethods.cashDetail}
                </Antd.Typography.Text>
              </Antd.Collapse.Panel>
            </Antd.Collapse>

            <Antd.Divider />

            <Antd.Form.Item>
              <Antd.Button
                size="large"
                type="primary"
                className="w-full"
                onClick={() => {
                  setStepTwo("finish");
                  setStepThree("finish");
                }}
              >
                {langs?.cart.action.payment}
              </Antd.Button>
            </Antd.Form.Item>
          </Antd.Card>
        </Antd.Col>
      </Antd.Row>
    </Antd.Form>
  );
};

export default CartForm;
