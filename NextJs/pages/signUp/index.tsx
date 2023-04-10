import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import { IAuth } from "@/common/interface/auth";
import useLangStore from "@/store/LangStore";
import Link from "next/link";

const SignUp: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const initialValues: IAuth = {
    account: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: 0,
    birthday: "",
    address: "",
    cityCode: "",
    districtCode: "",
    wardCode: "",
  };

  return (
    <div className="sign-up">
      <Antd.Card title={langs?.signUp.title} className="sign-up-card">
        <Antd.Form initialValues={initialValues} layout="vertical">
          <Antd.Row gutter={16}>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Input
                name="account"
                required
                allowClear
                label={langs?.common.form.label.account}
              />
            </Antd.Col>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Input
                name="password"
                type="password"
                required
                allowClear
                label={langs?.common.form.label.password}
              />
            </Antd.Col>
          </Antd.Row>

          <Antd.Divider orientation="left" orientationMargin={0}>
            {langs?.customer.contactInfo}
          </Antd.Divider>

          <Antd.Row gutter={16}>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Input
                name="firstName"
                required
                allowClear
                label={langs?.common.form.label.firstName}
              />
            </Antd.Col>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Input
                name="lastName"
                required
                allowClear
                label={langs?.common.form.label.lastName}
              />
            </Antd.Col>
          </Antd.Row>

          <Antd.Row gutter={16}>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Input
                name="phone"
                required
                allowClear
                label={langs?.common.form.label.phone}
              />
            </Antd.Col>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Input
                name="email"
                required
                allowClear
                label={langs?.common.form.label.email}
              />
            </Antd.Col>
          </Antd.Row>

          <Antd.Row gutter={16}>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Select
                name="gender"
                required
                allowClear
                label={langs?.common.form.label.gender}
              />
            </Antd.Col>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Date
                name="birthday"
                required
                allowClear
                label={langs?.common.form.label.birthday}
              />
            </Antd.Col>
          </Antd.Row>

          <Antd.Divider orientation="left" orientationMargin={0}>
            {langs?.customer.address}
          </Antd.Divider>

          <Antd.Row gutter={16}>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Input
                name="address"
                required
                allowClear
                label={langs?.common.form.label.address}
              />
            </Antd.Col>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Select
                name="cityCode"
                required
                allowClear
                label={langs?.common.form.label.city}
              />
            </Antd.Col>
          </Antd.Row>

          <Antd.Row gutter={16}>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Select
                name="districtCode"
                required
                allowClear
                label={langs?.common.form.label.district}
              />
            </Antd.Col>
            <Antd.Col xs={24} md={12} lg={12}>
              <Components.Fields.Select
                name="wardCode"
                required
                allowClear
                label={langs?.common.form.label.ward}
              />
            </Antd.Col>
          </Antd.Row>

          <Antd.Divider />

          <Antd.Space className="flex justify-center mb-5">
            <Antd.Typography.Text>{langs?.signUp.note}</Antd.Typography.Text>
            <span>|</span>
            <Link href="/signIn" className="text-blue-400">
              {langs?.signIn.title}
            </Link>
          </Antd.Space>

          <Antd.Button size="large" type="primary" className="w-full">
            {langs?.common.form.action.signUp}
          </Antd.Button>
        </Antd.Form>
      </Antd.Card>
    </div>
  );
};

export default SignUp;
