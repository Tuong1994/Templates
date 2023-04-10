import React from "react";
import * as Antd from "antd";
import { NamePath } from "antd/es/form/interface";
import useLangStore from "@/store/LangStore";

interface DateProps {
  name?: NamePath;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  allowClear?: boolean;
  placeholder?: string;
  rootClassName?: string;
  rules?: Antd.FormRule[];
  size?: Antd.DatePickerProps["size"];
  format?: Antd.DatePickerProps["format"];
  requiredMark?: Antd.FormItemProps["requiredMark"];
  hasFeedback?: Antd.FormItemProps["hasFeedback"];
  onChange?: Antd.DatePickerProps["onChange"];
  onBlur?: Antd.DatePickerProps["onBlur"];
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
  size,
  format = "DD/MM/YYYY",
  requiredMark,
  hasFeedback,
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
      <Antd.DatePicker
        className="w-full"
        allowClear={allowClear}
        disabled={disabled}
        format={format}
        size={size}
        placeholder={placeholder ?? langs?.common.form.placeholder.type}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Antd.Form.Item>
  );
};

export default Date;
