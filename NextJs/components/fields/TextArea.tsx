import React from "react";
import * as Antd from "antd";
import { NamePath } from "antd/es/form/interface";
import { TextAreaProps } from "antd/es/input/TextArea";
import useLangStore from "@/store/LangStore";

interface TextAreaCustomProps {
  name?: NamePath;
  label?: string;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  allowClear?: boolean;
  placeholder?: string;
  rootClassName?: string;
  rules?: Antd.FormRule[];
  size?: TextAreaProps["size"];
  requiredMark?: Antd.FormItemProps["requiredMark"];
  hasFeedback?: Antd.FormItemProps["hasFeedback"];
  onChange?: TextAreaProps["onChange"];
  onBlur?: TextAreaProps["onBlur"];
}

const TextArea: React.FC<TextAreaCustomProps> = ({
  name,
  label,
  rows,
  cols,
  disabled,
  readOnly,
  required,
  allowClear = true,
  placeholder,
  rootClassName,
  rules,
  size,
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
      <Antd.Input.TextArea
        rows={rows}
        cols={cols}
        allowClear={allowClear}
        disabled={disabled}
        readOnly={readOnly}
        size={size}
        placeholder={placeholder ?? langs?.common.form.placeholder.type}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Antd.Form.Item>
  );
};

export default TextArea;
