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
  size?: Antd.SelectProps["size"];
  requiredMark?: Antd.FormItemProps["requiredMark"];
  hasFeedback?: Antd.FormItemProps["hasFeedback"];
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
  size,
  requiredMark,
  hasFeedback = true,
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
      requiredMark={requiredMark}
      hasFeedback={hasFeedback}
    >
      <Antd.Select
        allowClear={allowClear}
        disabled={disabled}
        options={options}
        size={size}
        placeholder={placeholder ?? langs?.common.form.placeholder.select}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Antd.Form.Item>
  );
};

export default Select;
