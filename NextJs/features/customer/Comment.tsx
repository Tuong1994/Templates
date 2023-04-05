import React from "react";
import * as Components from "@/components";
import { IComment } from "@/common/interface/comment";
import { ITableColumns } from "@/common/interface/table";
import { Langs } from "@/lang";
import moment from "moment";

interface CustomerCommentProps {
  langs: Langs;
}

const CustomerComment: React.FC<CustomerCommentProps> = ({ langs }) => {
  const comments: IComment[] = [
    {
      id: "1",
      commentText: "This is a comment 1",
      productName: "Product 1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      commentText: "This is a comment 2",
      productName: "Product 2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const columns: ITableColumns<IComment> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: langs?.common.table.products,
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: langs?.common.table.comment,
      dataIndex: "commentText",
      key: "commentText",
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
      <Components.Table<IComment> data={comments} columns={columns} />
      <Components.Pagination page={1} total={100} />
    </React.Fragment>
  );
};

export default CustomerComment;
