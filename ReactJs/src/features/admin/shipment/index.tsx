import React from "react";
import * as Components from "components";
import { IShipment } from "common/interface/shipment";
import { EShipmentStatus } from "common/enum/shipment";
import { ITableColumns } from "common/interface/table";
import { TABLE_CELL_CLASS } from "common/constant/common";
import { renderShipmentStatus } from "utils/helpers";
import useLangStore from "store/LangStore";
import AdminShipmentsFilter from "features/admin/shipment/Filter";
import moment from "moment";
import utils from "utils";

const AdminShipments: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const shipments: IShipment[] = [
    {
      id: "001",
      status: EShipmentStatus.DELIVERING,
      customerFirstName: "Tường",
      customerLastName: "Nhâm Bổn",
      customerPhone: "0793229970",
      customerEmail: "nbtuong1994@gmail.com",
      address: "79/24/13 Âu Cơ",
      cityCode: "HCM",
      districtCode: "11",
      wardCode: "14",
      orderId: "#0001",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "002",
      status: EShipmentStatus.DELIVERED,
      customerFirstName: "Tường",
      customerLastName: "Nhâm Bổn",
      customerPhone: "0793229970",
      customerEmail: "nbtuong1994@gmail.com",
      address: "79/24/13 Âu Cơ",
      cityCode: "HCM",
      districtCode: "11",
      wardCode: "14",
      orderId: "#0002",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const columns: ITableColumns<IShipment> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: langs?.common.table.customer,
      dataIndex: "",
      key: "customer",
      render: (_, record) => (
        <div className={TABLE_CELL_CLASS}>
          {record.customerLastName} {record.customerFirstName}
        </div>
      ),
    },
    {
      title: langs?.common.table.phone,
      dataIndex: "customerPhone",
      key: "customerPhone",
      render: (phone) => (
        <div className={TABLE_CELL_CLASS}>{utils.formatPhoneNumber(phone)}</div>
      ),
    },
    {
      title: langs?.common.table.email,
      dataIndex: "customerEmail",
      key: "customerEmail",
      render: (email) => <div className={TABLE_CELL_CLASS}>{email}</div>,
    },
    {
      title: langs?.common.table.address,
      dataIndex: "address",
      key: "address",
      render: (_, record) => (
        <div className={TABLE_CELL_CLASS}>
          {record.address} P.{record.wardCode} Q.{record.districtCode}{" "}
          {record.cityCode}
        </div>
      ),
    },
    {
      title: langs?.common.table.orderId,
      dataIndex: "orderId",
      key: "orderId",
      render: (orderId) => <div className={TABLE_CELL_CLASS}>{orderId}</div>,
    },
    {
      title: langs?.common.table.status,
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className={TABLE_CELL_CLASS}>
          {renderShipmentStatus(status, langs)}
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
      isHide: true,
      render: (date) => (
        <div className={TABLE_CELL_CLASS}>
          {moment(date).format("DD/MM/YYYY")}
        </div>
      ),
    },
  ];

  const filters = () => <AdminShipmentsFilter langs={langs} />;

  return (
    <React.Fragment>
      <Components.BodyHeader title={langs?.admin.shipment.list.title} />

      <Components.Table<IShipment>
        data={shipments}
        columns={columns}
        hideCols
        hasFilter
        filterFields={filters}
      />

      <Components.Pagination page={1} total={100} />
    </React.Fragment>
  );
};

export default AdminShipments;
