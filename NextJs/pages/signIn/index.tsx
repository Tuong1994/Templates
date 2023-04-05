import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import useLangStore from "@/store/LangStore";
import Link from "next/link";
import { IAuth } from "@/common/interface/auth";

const SignIn: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const rules: Antd.FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
  ];

  const initialValues: IAuth = {
    account: "",
    password: "",
  };

  return (
    <div className="sign-in">
      <Antd.Card title={langs?.signIn.title} className="sign-in-card">
        <Antd.Form initialValues={initialValues} layout="vertical">
          <Components.Fields.Input
            name="account"
            required
            allowClear
            rules={rules}
            label={langs?.common.form.label.account}
          />
          <Components.Fields.Input
            name="password"
            type="password"
            required
            allowClear
            rules={rules}
            label={langs?.common.form.label.password}
          />

          <Antd.Divider />

          <Antd.Space className="flex justify-center mb-5">
            <Antd.Typography.Text>{langs?.signIn.note}</Antd.Typography.Text>
            <span>|</span>
            <Link href="/signUp" className="text-blue-400">
              {langs?.signUp.title}
            </Link>
          </Antd.Space>

          <Antd.Button size="large" type="primary" className="w-full">
            {langs?.common.form.action.signIn}
          </Antd.Button>
        </Antd.Form>
      </Antd.Card>
    </div>
  );
};

export default SignIn;
