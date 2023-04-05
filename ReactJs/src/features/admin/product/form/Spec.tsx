import React from "react";
import * as Components from "components";
import * as Antd from "antd";
import { Langs } from "lang";
import { FaPlus, FaTrash } from "react-icons/fa";

interface SpecProps {
  langs: Langs;
  rules: Antd.FormRule[];
}

const Spec: React.FC<SpecProps> = ({ langs, rules }) => {
  return (
    <Antd.Card
      className="form-card--border"
      title={langs?.admin.product.form.spec}
    >
      <Antd.Form.List name="specs">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Antd.Row gutter={[10, 10]} key={key} align="middle">
                <Antd.Col lg={11}>
                  <Components.Fields.Input
                    required
                    rules={rules}
                    name={[name, "title"]}
                    label={langs?.common.form.label.title}
                  />
                </Antd.Col>

                <Antd.Col lg={11}>
                  <Components.Fields.Input
                    required
                    rules={rules}
                    name={[name, "content"]}
                    label={langs?.common.form.label.content}
                  />
                </Antd.Col>

                <Antd.Col lg={2}>
                  <Antd.Button style={{ marginTop: "20px" }}>
                    <FaTrash
                      className="cursor-pointer text-red-400"
                      size={14}
                      onClick={() => remove(name)}
                    />
                  </Antd.Button>
                </Antd.Col>
              </Antd.Row>
            ))}
            <Antd.Form.Item>
              <Antd.Button onClick={() => add()}>
                <Antd.Space>
                  <FaPlus size={14} />
                  <span>{langs?.admin.product.form.addSpec}</span>
                </Antd.Space>
              </Antd.Button>
            </Antd.Form.Item>
          </>
        )}
      </Antd.Form.List>
    </Antd.Card>
  );
};

export default Spec;
