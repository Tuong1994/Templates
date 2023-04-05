import React from "react";
import * as Components from "components";
import * as Antd from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import useLangStore from "store/LangStore";

interface FormLayoutProps {
  breadcumbs?: ItemType[];
  rootClass?: string;
  headerTitle?: string;
  headerRightItems?: React.ReactNode;
  leftColItems?: string | React.ReactNode;
  rightColItems?: string | React.ReactNode;
  layout?: Antd.FormProps["layout"];
  onFinish?: Antd.FormProps["onFinish"];
  onAbort?: Antd.FormProps["onAbort"];
}

const FormLayout: React.FC<FormLayoutProps> = ({
  breadcumbs,
  rootClass = "",
  headerTitle,
  headerRightItems,
  leftColItems,
  rightColItems,
  layout = "vertical",
  onFinish,
  onAbort,
}) => {
  const langs = useLangStore((state) => state.langs);

  return (
    <Antd.Form
      layout={layout}
      className={rootClass}
      onFinish={onFinish}
      onAbort={onAbort}
    >
      <Components.BodyHeader
        items={breadcumbs}
        title={headerTitle}
        rightItems={() =>
          headerRightItems ? (
            headerRightItems
          ) : (
            <Antd.Button type="primary" className="admin-button">
              {langs?.common.form.action.save}
            </Antd.Button>
          )
        }
      />

      <Antd.Row gutter={[30, 30]}>
        <Antd.Col xs={24} md={16} lg={16}>
          {leftColItems}
        </Antd.Col>

        <Antd.Col xs={24} md={8} lg={8}>
          {rightColItems}
        </Antd.Col>
      </Antd.Row>
    </Antd.Form>
  );
};

export default FormLayout;
