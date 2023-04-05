import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { FaPlus } from "react-icons/fa";
import { Langs } from "@/lang";
import { ICustomer } from "@/common/interface/customer";
import { EGender, ERole } from "@/common/enum/user";
import useOption from "@/common/repository/option";
import moment from "moment";

interface CustomerFormProps {
  langs: Langs;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ langs, isOpen, setIsOpen }) => {
  const options = useOption();

  const [form] = Antd.Form.useForm();

  const dateFormat = "DD/MM/YYYY";

  const rules: Antd.FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
  ];

  const initialValues: ICustomer = {
    account: "tuongnb",
    password: "123456",
    firstName: "Bổn Tường",
    lastName: "Nhâm",
    phone: "0793229970",
    email: "tuongnb@gmail.com",
    gender: EGender.MALE,
    birthday: "",
    address: "79/24/13 Âu Cơ",
    cityCode: "HCM",
    districtCode: "11",
    wardCode: "14",
    role: ERole.USER,
    avatar: {
      id: "1",
      path: "",
      size: 0,
    },
  };

  return (
    <Antd.Modal
      title={langs?.customer.form.title}
      closable={false}
      open={isOpen}
      onCancel={() => setIsOpen(false)}
    >
      <Antd.Form initialValues={initialValues} form={form} layout="vertical">
        <Antd.Row gutter={16} justify="space-between">
          <Antd.Col xs={10} lg={8}>
            <Components.Fields.Upload.Single
              name="avatar"
              listType="picture-circle"
            />
          </Antd.Col>

          <Antd.Col xs={14} lg={16}>
            <Components.Fields.Input
              name="account"
              disabled
              label={langs?.common.form.label.account}
            />

            <Components.Fields.Input
              name="password"
              type="password"
              disabled
              label={langs?.common.form.label.password}
            />
          </Antd.Col>
        </Antd.Row>

        {/* CONTACT INFOMATION */}
        <Antd.Divider orientation="left" orientationMargin={0}>
          {langs?.customer.contactInfo}
        </Antd.Divider>

        <Components.Fields.Input
          required
          name="firstName"
          rules={rules}
          label={langs?.common.form.label.firstName}
        />

        <Components.Fields.Input
          required
          name="lastName"
          rules={rules}
          label={langs?.common.form.label.lastName}
        />

        <Components.Fields.Input
          required
          name="phone"
          rules={rules}
          label={langs?.common.form.label.phone}
        />

        <Components.Fields.Input
          required
          name="email"
          rules={rules}
          label={langs?.common.form.label.email}
        />

        <Antd.Row gutter={10}>
          <Antd.Col xs={12} lg={12}>
            <Components.Fields.Select
              name="gender"
              options={options.gender}
              label={langs?.common.form.label.gender}
            />
          </Antd.Col>

          <Antd.Col xs={12} lg={12}>
            <Components.Fields.Date
              name="birthday"
              label={langs?.common.form.label.birthday}
            />
          </Antd.Col>
        </Antd.Row>

        {/* ADDRESS INFOMATION */}
        <Antd.Divider orientation="left" orientationMargin={0}>
          {langs?.customer.address}
        </Antd.Divider>

        <Components.Fields.Input
          required
          name="address"
          rules={rules}
          label={langs?.common.form.label.address}
        />

        <Components.Fields.Select
          required
          name="cityCode"
          rules={rules}
          label={langs?.common.form.label.city}
        />

        <Components.Fields.Select
          required
          name="districtCode"
          rules={rules}
          label={langs?.common.form.label.district}
        />

        <Components.Fields.Select
          required
          name="wardCode"
          rules={rules}
          label={langs?.common.form.label.ward}
        />
      </Antd.Form>
    </Antd.Modal>
  );
};

export default CustomerForm;
