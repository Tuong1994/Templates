import { message } from "antd";
import React from "react";
import useLangStore from "@/store/LangStore";
import useMessageStore from "@/store/MessageStore";

const Message: React.FC<{}> = () => {
  const langs = useLangStore((state) => state.langs);

  const [messageApi, contextHolder] = message.useMessage();

  const [error, success, setError, setSuccess] = useMessageStore((state) => [
    state.error,
    state.success,
    state.setError,
    state.setSuccess,
  ]);

  const { isError, type, resError, errorMessage } = error;

  const { isSuccess, successMessage } = success;

  message.config({ duration: 500 });

  const afterSuccessClose = () => setSuccess({ ...success, isSuccess: false });

  const afterErrorClose = () => setError({ ...error, isError: false });

  const triggerMessageApi = (m: string) =>
    messageApi.error(m).then(afterErrorClose);

  const handleError = () => {
    if (!resError) return;

    switch (type) {
      case "auth": {
        if (resError?.status === 404)
          triggerMessageApi(langs?.common.message.error.account ?? "");
        else if (resError?.status === 401)
          triggerMessageApi(langs?.common.message.error.password ?? "");

        break;
      }

      case "default": {
        if (resError?.status === 500)
          triggerMessageApi(langs?.common.message.error.network ?? "");

        break;
      }

      default:
        triggerMessageApi(errorMessage ?? "");
    }
  };

  React.useEffect(() => {
    if (isSuccess) messageApi.success(successMessage).then(afterSuccessClose);
  }, [isSuccess]);

  React.useEffect(() => {
    if (isError) handleError();
  }, [isError]);

  return <>{contextHolder}</>;
};

export default Message;
