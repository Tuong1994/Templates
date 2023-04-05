import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { IOrder } from "@/common/interface/order";
import { EOrderStatus, EPaymentMethod } from "@/common/enum/order";
import { ITableColumns } from "@/common/interface/table";
import { Langs } from "@/lang";
import moment from "moment";
import useLangStore from "@/store/LangStore";
import utils from "@/utils";
import { sumPrice, sumQuanity } from "@/utils/helpers";

interface CustomerOrderProps {
  langs: Langs;
}

const CustomerOrder: React.FC<CustomerOrderProps> = ({ langs }) => {
  const type = useLangStore((state) => state.type);

  const orders: IOrder[] = [
    {
      id: "#1110222",
      shipmentFee: 0,
      products: [
        {
          id: "001",
          name: "Product 1",
          price: 2500000,
          quanity: 1,
        },
        {
          id: "002",
          name: "Product 2",
          price: 3500000,
          quanity: 2,
        },
      ],
      totalPay: 2500000,
      paymentMethod: EPaymentMethod.TRANSFER,
      status: EOrderStatus.FINISHED,
      customerId: "001",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "#1110223",
      shipmentFee: 0,
      products: [
        {
          id: "001",
          name: "Product 1",
          price: 5500000,
          quanity: 4,
        },
      ],
      totalPay: 2500000,
      paymentMethod: EPaymentMethod.CASH,
      status: EOrderStatus.WAITING,
      customerId: "001",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const columns: ITableColumns<IOrder> = [
    {
      title: langs?.common.table.orderId,
      dataIndex: "id",
      key: "id",
    },
    {
      title: langs?.common.table.products,
      dataIndex: "products",
      key: "product",
      render: (_, record) => (
        <React.Fragment>{sumQuanity(record.products)}</React.Fragment>
      ),
    },
    {
      title: langs?.common.table.totalPay,
      dataIndex: "totalPay",
      key: "totalPay",
      width: 200,
      render: (_, record) => (
        <React.Fragment>
          {utils.formatMoney(type, sumPrice(record.products))}
        </React.Fragment>
      ),
    },
    {
      title: langs?.common.table.orderStatus,
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <React.Fragment>
          {status === EOrderStatus.WAITING ? (
            <Antd.Tag color="orange">{langs?.order.status.waiting}</Antd.Tag>
          ) : (
            <Antd.Tag color="blue">{langs?.order.status.finished}</Antd.Tag>
          )}
        </React.Fragment>
      ),
    },
    {
      title: langs?.common.table.createdAt,
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => (
        <React.Fragment>{moment(date).format("DD/MM/YYYY")}</React.Fragment>
      ),
    },
    {
      title: langs?.common.table.updatedAt,
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date) => (
        <React.Fragment>{moment(date).format("DD/MM/YYYY")}</React.Fragment>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Components.Table<IOrder> data={orders} columns={columns} />
      <Components.Pagination page={1} total={100} />
    </React.Fragment>
  );
};

export default CustomerOrder;
