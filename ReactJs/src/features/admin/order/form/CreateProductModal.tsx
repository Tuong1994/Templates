import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import { Langs } from "lang";
import utils from "utils";

interface CreateProductModalProps {
  type: number;
  langs: Langs;
  rules: Antd.FormRule[];
  isCreate: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateProductModal: React.FC<CreateProductModalProps> = ({
  type,
  langs,
  rules,
  isCreate,
  setIsCreate,
}) => {
  return (
    <Antd.Modal
      title={langs?.admin.order.form.createProduct}
      closable={false}
      open={isCreate}
      className="create-product-modal admin-ant-modal"
      okText={langs?.common.form.action.save}
      cancelText={langs?.common.form.action.cancel}
      onCancel={() => setIsCreate(false)}
    >
      <Antd.Form layout="vertical">
        <Components.Fields.Upload.Multiple />

        <Components.Fields.Input
          required
          rules={rules}
          label={langs?.common.form.label.productName}
        />

        <Components.Fields.Select
          required
          rules={rules}
          label={langs?.common.form.label.category}
        />

        <Components.Fields.Select
          required
          rules={rules}
          label={langs?.common.form.label.producer}
        />

        <Components.Fields.Input
          required
          rules={rules}
          label={langs?.common.form.label.price}
        />

        <Components.Fields.Select
          required
          rules={rules}
          label={langs?.common.form.label.profit}
        />

        <Antd.Divider />

        <Antd.Space className="create-product-modal-price">
          <Antd.Typography.Text>
            {langs?.common.form.label.price}:
          </Antd.Typography.Text>
          <Antd.Typography.Title level={4} className="price-number">
            {utils.formatMoney(type, 1000000)}
          </Antd.Typography.Title>
        </Antd.Space>
      </Antd.Form>
    </Antd.Modal>
  );
};

export default CreateProductModal;
