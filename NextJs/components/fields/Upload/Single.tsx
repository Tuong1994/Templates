import React from "react";
import * as Antd from "antd";
import { FaPlus } from "react-icons/fa";

interface SingleUploadProps {
  name?: string;
  listType?: Antd.UploadProps["listType"];
}

const SingleUpload: React.FC<SingleUploadProps> = ({ name, listType }) => {
  return (
    <Antd.Form.Item name={name}>
      <Antd.Upload listType={listType}>
        <FaPlus />
      </Antd.Upload>
    </Antd.Form.Item>
  );
};

export default SingleUpload;
