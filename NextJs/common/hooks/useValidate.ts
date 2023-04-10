import useLangStore from "@/store/LangStore";
import { FormRule } from "antd";
import {
  PHONE_REGEX,
  REPLACE_MAX_NUM_REGEX,
  REPLACE_MIN_NUM_REGEX,
} from "../constant/regex";

const useValidate = () => {
  const langs = useLangStore((state) => state.langs);

  const defaultRules: FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
  ];

  const accountRules: FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
    { whitespace: true, message: langs?.common.form.validate.whiteSpace },
    {
      min: 6,
      message: langs?.common.form.validate.min.replace(
        REPLACE_MIN_NUM_REGEX,
        "6"
      ),
    },
    {
      max: 20,
      message: langs?.common.form.validate.max.replace(
        REPLACE_MAX_NUM_REGEX,
        "20"
      ),
    },
  ];

  const passwordRules: FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
    { whitespace: true, message: langs?.common.form.validate.whiteSpace },
    {
      min: 6,
      message: langs?.common.form.validate.min.replace(
        REPLACE_MIN_NUM_REGEX,
        "6"
      ),
    },
  ];

  const emailRules: FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
    { whitespace: true, message: langs?.common.form.validate.whiteSpace },
    { type: "email", message: langs?.common.form.validate.email },
  ];

  const phoneRules: FormRule[] = [
    { required: true, message: langs?.common.form.validate.required },
    { whitespace: true, message: langs?.common.form.validate.whiteSpace },
    () => ({
      validator: (_, value) => {
        if (PHONE_REGEX.test(value)) return Promise.resolve();
        return Promise.reject(langs?.common.form.validate.phone);
      },
    }),
  ];

  return {
    defaultRules,
    accountRules,
    passwordRules,
    emailRules,
    phoneRules,
  };
};

export default useValidate;
