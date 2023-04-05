import React from "react";
import * as Antd from "antd";
import useLangStore from "@/store/LangStore";
import { ISelectOption } from "@/common/interface/option";
import { NamePath } from "antd/es/form/interface";

interface SelectProps {
  name?: NamePath;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  allowClear?: boolean;
  placeholder?: string;
  rootClassName?: string;
  options?: ISelectOption[];
  rules?: Antd.FormRule[];
  onChange?: Antd.SelectProps["onChange"];
  onBlur?: Antd.SelectProps["onBlur"];
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  disabled,
  required,
  allowClear = true,
  placeholder,
  rootClassName,
  rules,
  options,
  onChange,
  onBlur,
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
      <Antd.Select
        allowClear={allowClear}
        disabled={disabled}
        placeholder={placeholder ?? langs?.common.form.placeholder.select}
        options={options}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Antd.Form.Item>
  );
};

export default Select;
