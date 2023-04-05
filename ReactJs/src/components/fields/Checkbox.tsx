import React from "react";
import * as Antd from "antd";
import { NamePath } from "antd/es/form/interface";

interface CheckboxProps {
  name?: NamePath;
  disabled?: boolean;
  required?: boolean;
  rootClassName?: string;
  rules?: Antd.FormRule[];
  children?: string | React.ReactNode;
  onChange?: Antd.CheckboxProps["onChange"];
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  disabled,
  required,
  rootClassName,
  rules,
  children,
  onChange,
}) => {
  return (
    <Antd.Form.Item
      rootClassName={rootClassName}
      name={name}
      required={required}
      rules={rules}
    >
      <Antd.Checkbox disabled={disabled} onChange={onChange}>
        {children}
      </Antd.Checkbox>
    </Antd.Form.Item>
  );
};

export default Checkbox;
