import React from "react";
import * as Components from "components";
import * as Antd from "antd";
import { StepStatus } from ".";
import { Langs } from "lang";
import { IProduct } from "common/interface/product";
import { ITableColumns } from "common/interface/table";
import utils from "utils";

interface CartInfoProps {
  type: number;
  langs: Langs;
  products: IProduct[];
  columns: ITableColumns<IProduct>;
  totalPay: number;
  setStepOne: React.Dispatch<React.SetStateAction<StepStatus>>;
}

const CartInfo: React.FC<CartInfoProps> = ({
  type,
  langs,
  products,
  columns,
  totalPay,
  setStepOne,
}) => {
  return (
    <Antd.Row gutter={[16, 16]} className="cart-info">
      {/* TABLE */}
      <Antd.Col xs={24} lg={14}>
        <Antd.Card className="info-card">
          <Components.Table<IProduct>
            data={products}
            columns={columns}
            scroll={{ x: true }}
          />

          <Antd.Divider />

          <Antd.Button size="large" type="primary" ghost>
            {langs?.cart.action.update}
          </Antd.Button>
        </Antd.Card>
      </Antd.Col>

      {/* INFO */}
      <Antd.Col xs={24} lg={10}>
        <Antd.Card className="info-card">
          <Antd.Typography>
            <Antd.Row justify="space-between" className="my-3">
              <Antd.Col>
                <Antd.Typography.Text className="text-base">
                  {langs?.cart.notionalPrice}:
                </Antd.Typography.Text>
              </Antd.Col>
              <Antd.Col>
                <Antd.Typography.Text className="text-lg font-semibold">
                  {utils.formatMoney(type, totalPay)}
                </Antd.Typography.Text>
              </Antd.Col>
            </Antd.Row>

            <Antd.Row justify="space-between" className="my-3">
              <Antd.Col>
                <Antd.Typography.Text className="text-base">
                  {langs?.cart.totalPay}:
                </Antd.Typography.Text>
              </Antd.Col>
              <Antd.Col>
                <Antd.Typography.Text className="text-lg font-semibold">
                  {utils.formatMoney(type, totalPay)}
                </Antd.Typography.Text>
              </Antd.Col>
            </Antd.Row>
          </Antd.Typography>

          <Antd.Divider />

          <Antd.Button
            size="large"
            className="w-full font-semibold"
            type="primary"
            onClick={() => setStepOne("finish")}
          >
            {langs?.cart.action.payment}
          </Antd.Button>
        </Antd.Card>
      </Antd.Col>
    </Antd.Row>
  );
};

export default CartInfo;
