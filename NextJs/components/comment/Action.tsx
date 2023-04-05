import React from "react";
import * as Antd from "antd";
import { FaReply, FaEdit, FaTrash } from "react-icons/fa";
import { Langs } from "@/lang";
import { IActiveComment } from ".";
import { IComment } from "@/common/interface/comment";

interface CommentItemActionProps {
  langs: Langs;
  comment: IComment;
  activeComment: IActiveComment;
  setActiveComment: React.Dispatch<React.SetStateAction<IActiveComment>>;
}

const CommentItemAction: React.FC<CommentItemActionProps> = ({
  langs,
  comment,
  activeComment,
  setActiveComment,
}) => {
  return (
    <Antd.Space className="inner-action">
      <Antd.Tooltip title={langs?.common.form.action.reply}>
        <Antd.Button
          className="action-btn"
          size="small"
          onClick={() =>
            setActiveComment({
              ...activeComment,
              action: "reply",
              commentId: comment.id ?? "",
            })
          }
        >
          <FaReply />
        </Antd.Button>
      </Antd.Tooltip>

      <Antd.Tooltip title={langs?.common.form.action.edit}>
        <Antd.Button
          className="action-btn"
          size="small"
          onClick={() =>
            setActiveComment({
              ...activeComment,
              action: "edit",
              commentId: comment.id ?? "",
            })
          }
        >
          <FaEdit />
        </Antd.Button>
      </Antd.Tooltip>

      <Antd.Tooltip title={langs?.common.form.action.delete}>
        <Antd.Button className="action-btn" size="small">
          <FaTrash />
        </Antd.Button>
      </Antd.Tooltip>
    </Antd.Space>
  );
};

export default CommentItemAction;
