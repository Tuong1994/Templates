import React from "react";
import * as Antd from "antd";
import { FaSearch } from "react-icons/fa";
import { NamePath } from "antd/es/form/interface";
import useLangStore from "@/store/LangStore";

interface SearchProps {
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

const Search: React.FC<SearchProps> = ({
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

  return (
    <Antd.Form.Item
      rootClassName={rootClassName}
      name={name}
      required={required}
      label={label}
      rules={rules}
    >
      <Antd.Input
        allowClear={allowClear}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={
          placeholder ?? langs?.common.form.placeholder.searchProduct
        }
        suffix={<FaSearch />}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Antd.Form.Item>
  );
};

export default Search;
