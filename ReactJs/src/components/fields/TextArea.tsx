import React from "react";
import * as Antd from "antd";
import { NamePath } from "antd/es/form/interface";
import { TextAreaProps } from "antd/es/input/TextArea";
import useLangStore from "store/LangStore";

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
      <Antd.Input.TextArea
        rows={rows}
        cols={cols}
        allowClear={allowClear}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder ?? langs?.common.form.placeholder.type}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Antd.Form.Item>
  );
};

export default TextArea;
