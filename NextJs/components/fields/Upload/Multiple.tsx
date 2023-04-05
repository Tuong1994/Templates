import React from "react";
import * as Antd from "antd";
import { FaInbox } from "react-icons/fa";
import useLangStore from "@/store/LangStore";

interface MultipleUploadProps {
  name?: string;
}

const MultipleUpload: React.FC<MultipleUploadProps> = ({ name }) => {
  const langs = useLangStore((state) => state.langs);

  const props: Antd.UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        Antd.message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        Antd.message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Antd.Form.Item name={name}>
      <Antd.Upload.Dragger {...props}>
        <p className="flex justify-center">
          <FaInbox className="text-3xl text-blue-400" />
        </p>
        <p className="ant-upload-text">{langs?.common.form.note.action}</p>
        <p className="ant-upload-hint">{langs?.common.form.note.imgTypes}</p>
      </Antd.Upload.Dragger>
    </Antd.Form.Item>
  );
};

export default MultipleUpload;
