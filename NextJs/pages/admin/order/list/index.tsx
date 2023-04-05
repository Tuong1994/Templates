import React from "react";
import * as Components from "@/components";
import * as Antd from "antd";
import { IOrder } from "@/common/interface/order";
import { ITableColumns } from "@/common/interface/table";
import { EOrderStatus, EPaymentMethod } from "@/common/enum/order";
import {
  renderOrderStatus,
  renderPaymentMethods,
  sumQuanity,
} from "@/utils/helpers";
import { TABLE_CELL_CLASS } from "@/common/constant/common";
import Link from "next/link";
import AdminOrdersFilter from "@/features/admin/order/list/Filter";
import useLangStore from "@/store/LangStore";
import utils from "@/utils";
import moment from "moment";

const AdminOrders: React.FC<{}> = (props) => {
  const type = useLangStore((state) => state.type);
  
  const langs = useLangStore((state) => state.langs);

  const orders: IOrder[] = [
    {
      id: "O_000011",
      products: [
        {
          id: "P_0001",
          name: "Core i3 8100",
          price: 3500000,
          quanity: 1,
        },
        {
          id: "P_0002",
          name: "Core i5 8400",
          price: 5500000,
          quanity: 2,
        },
      ],
      totalPay: 9000000,
      paymentMethod: EPaymentMethod.TRANSFER,
      status: EOrderStatus.FINISHED,
      customerId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "O_000012",
      products: [
        {
          id: "P_0001",
          name: "Core i3 8100",
          price: 3500000,
          quanity: 5,
        },
      ],
      totalPay: 3500000,
      paymentMethod: EPaymentMethod.COD,
      status: EOrderStatus.WAITING,
      customerId: "1",
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
      key: "products",
      render: (products) => (
        <div className={TABLE_CELL_CLASS}>{sumQuanity(products)}</div>
      ),
    },
    {
      title: langs?.common.table.totalPay,
      dataIndex: "totalPay",
      key: "totalPay",
      render: (totalPay) => (
        <div className={TABLE_CELL_CLASS}>{utils.formatMoney(type, totalPay)}</div>
      ),
    },
    {
      title: langs?.common.table.paymentMethod,
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      render: (paymentMethod) => (
        <div className={TABLE_CELL_CLASS}>
          {renderPaymentMethods(paymentMethod, langs)}
        </div>
      ),
    },
    {
      title: langs?.common.table.orderStatus,
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className={TABLE_CELL_CLASS}>{renderOrderStatus(status, langs)}</div>
      ),
    },
    {
      title: langs?.common.table.createdAt,
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => (
        <div className={TABLE_CELL_CLASS}>{moment(date).format("DD/MM/YYYY")}</div>
      ),
    },
    {
      title: langs?.common.table.updatedAt,
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date) => (
        <div className={TABLE_CELL_CLASS}>{moment(date).format("DD/MM/YYYY")}</div>
      ),
    },
  ];

  const filters = () => <AdminOrdersFilter langs={langs} />;

  return (
    <React.Fragment>
      <Components.BodyHeader
        title={langs?.admin.order.list.title}
        rightItems={() => (
          <Link href="/admin/order/form/1">
            <Antd.Button type="primary" className="admin-button">
              {langs?.admin.order.list.action}
            </Antd.Button>
          </Link>
        )}
      />

      <Components.Table<IOrder>
        data={orders}
        columns={columns}
        hideCols
        hasFilter
        filterFields={filters}
      />

      <Components.Pagination page={1} total={100} />
    </React.Fragment>
  );
};

export default AdminOrders;
