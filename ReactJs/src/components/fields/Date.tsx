import React from "react";
import * as Antd from "antd";
import { NamePath } from "antd/es/form/interface";
import useLangStore from "store/LangStore";

interface DateProps {
  name?: NamePath;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  allowClear?: boolean;
  placeholder?: string;
  rootClassName?: string;
  rules?: Antd.FormRule[];
}

const Date: React.FC<DateProps> = ({
  name,
  label,
  disabled,
  required,
  allowClear = true,
  placeholder,
  rootClassName,
  rules,
}) => {
  const langs = useLangStore((state) => state.langs);

  return (
    <Antd.Form.Item
      rootClassName={rootClassName}
      name={name}
      required={required}
      label={label}
      rules={rules}
    >
      <Antd.DatePicker
        className="w-full"
        allowClear={allowClear}
        disabled={disabled}
        placeholder={placeholder ?? langs?.common.form.placeholder.type}
      />
    </Antd.Form.Item>
  );
};

export default Date;
