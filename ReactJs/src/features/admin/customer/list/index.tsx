import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Link } from "react-router-dom";
import { ICustomer } from "common/interface/customer";
import { EGender, ERole } from "common/enum/user";
import { ITableColumns } from "common/interface/table";
import { TABLE_CELL_CLASS } from "common/constant/common";
import { renderGender, renderRole } from "utils/helpers";
import useLangStore from "store/LangStore";
import AdminCustomersFilter from "features/admin/customer/list/Filter";
import moment from "moment";
import utils from "utils";

const AdminCustomers: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const users: ICustomer[] = [
    {
      id: "001",
      account: "tuongnb",
      password: "",
      firstName: "Bổn Tường",
      lastName: "Nhâm",
      fullName: "Nhâm Bổn Tường",
      phone: "0793229970",
      email: "tuongnb@gmail.com",
      gender: EGender.MALE,
      birthday: "28/11/1994",
      address: "79/24/13 Âu Cơ",
      cityCode: "TP HCM",
      districtCode: "Q.11",
      wardCode: "P.14",
      role: ERole.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "002",
      account: "tuongnb",
      password: "",
      firstName: "Bổn Tường",
      lastName: "Nhâm",
      fullName: "Nhâm Bổn Tường",
      phone: "0793229970",
      email: "tuongnb@gmail.com",
      gender: EGender.MALE,
      birthday: "28/11/1994",
      address: "79 Lý Thường Kiệt",
      cityCode: "TP HCM",
      districtCode: "Q.10",
      wardCode: "P.10",
      role: ERole.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const columns: ITableColumns<ICustomer> = [
    {
      title: "",
      key: "avatar",
      render: (_) => <Antd.Avatar size={30} src="/images/default-avatar.png" />,
    },
    {
      title: langs?.common.table.account,
      dataIndex: "account",
      key: "account",
      render: (account, record) => (
        <Link
          to="/admin/customer/edit"
          state={{ productId: record.id }}
          className={`text-blue-400 block ${TABLE_CELL_CLASS}`}
        >
          {account}
        </Link>
      ),
    },
    {
      title: langs?.common.table.name,
      dataIndex: "fullName",
      key: "fullName",
      render: (name) => <div className={TABLE_CELL_CLASS}>{name}</div>,
    },
    {
      title: langs?.common.table.phone,
      dataIndex: "phone",
      key: "phone",
      render: (phone) => (
        <div className={TABLE_CELL_CLASS}>{utils.formatPhoneNumber(phone)}</div>
      ),
    },
    {
      title: langs?.common.table.email,
      dataIndex: "email",
      key: "email",
      render: (email) => <div className={TABLE_CELL_CLASS}>{email}</div>,
    },
    {
      title: langs?.common.table.gender,
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (
        <div className={TABLE_CELL_CLASS}>{renderGender(gender, langs)}</div>
      ),
    },
    {
      title: langs?.common.table.address,
      dataIndex: "address",
      key: "address",
      render: (_, record) => (
        <div className={TABLE_CELL_CLASS}>
          {record.address} {record.wardCode} {record.districtCode}{" "}
          {record.cityCode}
        </div>
      ),
    },
    {
      title: langs?.common.table.role,
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <div className={TABLE_CELL_CLASS}>{renderRole(role, langs)}</div>
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

  const filters = () => {
    return <AdminCustomersFilter langs={langs} />;
  };

  return (
    <React.Fragment>
      <Components.BodyHeader
        title={langs?.admin.customer.list.title}
        rightItems={() => {
          return (
            <Link to="/admin/customer/add">
              <Antd.Button type="primary" className="admin-button">
                {langs?.admin.customer.list.action}
              </Antd.Button>
            </Link>
          );
        }}
      />

      <Components.Table<ICustomer>
        hideCols
        hasFilter
        data={users}
        columns={columns}
        filterFields={filters}
      />

      <Components.Pagination page={1} total={100} />
    </React.Fragment>
  );
};

export default AdminCustomers;
