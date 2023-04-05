import React from "react";
import * as Antd from "antd";
import { NamePath } from "antd/es/form/interface";
import useLangStore from "@/store/LangStore";

interface InputProps {
  type?: "input" | "password";
  name?: NamePath;
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  allowClear?: boolean;
  placeholder?: string;
  rootClassName?: string;
  rules?: Antd.FormRule[];
  onChange?: Antd.InputProps["onChange"];
  onBlur?: Antd.InputProps["onBlur"];
}

const Input: React.FC<InputProps> = ({
  type = "input",
  name,
  label,
  disabled,
  readOnly,
  required,
  allowClear = true,
  placeholder,
  rootClassName,
  rules,
  onChange,
  onBlur,
}) => {
  const langs = useLangStore((state) => state.langs);

  const commonProps = {
    allowClear: allowClear,
    disabled: disabled,
    readOnly: readOnly,
    placeholder: placeholder ?? langs?.common.form.placeholder.type,
    onChange: onChange,
    onBlur: onBlur,
  };

  return (
    <Antd.Form.Item
      rootClassName={rootClassName}
      name={name}
      required={required}
      label={label}
      rules={rules}
    >
      {type === "input" ? (
        <Antd.Input {...commonProps} />
      ) : (
        <Antd.Input.Password {...commonProps} />
      )}
    </Antd.Form.Item>
  );
};

export default Input;
