import React from "react";
import * as Components from "@/components";
import * as Antd from "antd";
import { IRate } from "@/common/interface/rate";
import { ITableColumns } from "@/common/interface/table";
import { Langs } from "@/lang";
import moment from "moment";

interface CustomerRateProps {
  langs: Langs;
}

const CustomerRate: React.FC<CustomerRateProps> = ({ langs }) => {
  const rates: IRate[] = [
    {
      id: "1",
      point: 4,
      note: "This is my note",
      productName: "Product 1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "1",
      point: 3,
      note: "This is my note",
      productName: "Product 2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const columns: ITableColumns<IRate> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: langs?.common.table.productName,
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: langs?.common.table.point,
      dataIndex: "point",
      key: "point",
      render: (point) => <Antd.Rate value={point} disabled />,
    },
    {
      title: langs?.common.table.note,
      dataIndex: "note",
      key: "note",
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
      <Components.Table<IRate> data={rates} columns={columns} />
      <Components.Pagination page={1} total={100} />
    </React.Fragment>
  );
};

export default CustomerRate;
