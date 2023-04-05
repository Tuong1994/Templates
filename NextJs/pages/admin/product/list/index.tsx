import React from "react";
import * as Components from "@/components";
import * as Antd from "antd";
import {
  renderInventoryStatus,
  renderProductStatus,
  renderProductType,
} from "@/utils/helpers";
import { IProduct } from "@/common/interface/product";
import { EInventoryStatus, EProductStatus } from "@/common/enum/product";
import { ITableColumns } from "@/common/interface/table";
import { TABLE_CELL_CLASS } from "@/common/constant/common";
import Link from "next/link";
import useLangStore from "@/store/LangStore";
import AdminProductsFilter from "@/features/admin/product/list/Filter";
import utils from "@/utils";
import moment from "moment";

const AdminProducts: React.FC<{}> = (props) => {
  const type = useLangStore((state) => state.type);
  const langs = useLangStore((state) => state.langs);

  const products: IProduct[] = [
    {
      id: "P_0001",
      name: "Core i3 8100",
      price: 3500000,
      warranty: 36,
      status: EProductStatus.ACTIVE,
      inventoryStatus: EInventoryStatus.IN_STOCK,
      bestSale: true,
      outstand: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "P_0002",
      name: "Core i5 8400",
      price: 5500000,
      warranty: 36,
      status: EProductStatus.ACTIVE,
      inventoryStatus: EInventoryStatus.IN_STOCK,
      bestSale: true,
      outstand: true,
      createdAt: new Date(),
      updatedAt: new Date(),
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
      render: (name) => (
        <Link
          href="/admin/product/form/1"
          className={`text-blue-400 block ${TABLE_CELL_CLASS}`}
        >
          {name}
        </Link>
      ),
    },
    {
      title: langs?.common.table.price,
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <div className={TABLE_CELL_CLASS}>
          {utils.formatMoney(type, price)}
        </div>
      ),
    },
    {
      title: langs?.common.table.warranty,
      dataIndex: "warranty",
      key: "warranty",
      render: (warranty) => (
        <div className={TABLE_CELL_CLASS}>
          {warranty} {langs?.common.unit.months}
        </div>
      ),
    },
    {
      title: langs?.common.table.status,
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className={TABLE_CELL_CLASS}>
          {renderProductStatus(status, langs)}
        </div>
      ),
    },
    {
      title: langs?.common.table.inventory,
      dataIndex: "inventoryStatus",
      key: "inventoryStatus",
      render: (inventoryStatus) => (
        <div className={TABLE_CELL_CLASS}>
          {renderInventoryStatus(inventoryStatus, langs)}
        </div>
      ),
    },
    {
      title: langs?.common.table.type,
      dataIndex: "",
      key: "type",
      render: (_, record) => (
        <div className={TABLE_CELL_CLASS}>
          {renderProductType(record, langs)}
        </div>
      ),
    },
    {
      title: langs?.common.table.createdAt,
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => (
        <div className={TABLE_CELL_CLASS}>
          {moment(date).format("DD/MM/YYYY")}
        </div>
      ),
    },
    {
      title: langs?.common.table.updatedAt,
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date) => (
        <div className={TABLE_CELL_CLASS}>
          {moment(date).format("DD/MM/YYYY")}
        </div>
      ),
    },
  ];

  const filters = () => <AdminProductsFilter langs={langs} />;

  return (
    <React.Fragment>
      <Components.BodyHeader
        title={langs?.admin.product.list.title}
        rightItems={() => (
          <Link href="/admin/product/form/1">
            <Antd.Button type="primary" className="admin-button">
              {langs?.admin.product.list.action}
            </Antd.Button>
          </Link>
        )}
      />

      <Components.Table<IProduct>
        data={products}
        columns={columns}
        hideCols
        hasFilter
        filterFields={filters}
      />

      <Components.Pagination page={1} total={100} />
    </React.Fragment>
  );
};

export default AdminProducts;
