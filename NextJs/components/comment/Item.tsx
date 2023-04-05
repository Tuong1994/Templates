import React from "react";
import * as Antd from "antd";
import { Langs } from "@/lang";
import { IActiveComment } from ".";
import { IComment } from "@/common/interface/comment";
import CommentControl from "./Control";
import CommentItemAction from "./Action";
import CommentList from "./List";
import useCommentStore from "@/store/CommentStore";

interface CommentItemProps {
  langs: Langs;
  comment: IComment;
  activeComment: IActiveComment;
  setActiveComment: React.Dispatch<React.SetStateAction<IActiveComment>>;
}

const CommentItem: React.FC<CommentItemProps> = ({
  langs,
  comment,
  activeComment,
  setActiveComment,
}) => {
  const getReplies = useCommentStore((state) => state.getReplies);

  const nestedComment = getReplies(comment.id ?? "");

  const canReply: boolean = Boolean(comment.id) && !comment.parentId;

  const isReply: boolean =
    activeComment &&
    activeComment.action === "reply" &&
    activeComment.commentId === comment.id;

  const isEdit: boolean =
    activeComment &&
    activeComment.action === "edit" &&
    activeComment.commentId === comment.id;

  const controlProps = {
    langs: langs,
    isCancel: true,
    noTitle: true,
    onCancel: () => setActiveComment({ action: "", commentId: "" }),
  };

  return (
    <li className="list-item">
      <div className="item-content">
        <Antd.Tooltip title={comment.customerName}>
          <Antd.Avatar size={{ xs: 24, lg: 40 }} src="/images/default-avatar.png" />
        </Antd.Tooltip>

        <div className="content-inner">
          {/* TEXT/CONTROL */}
          {!isEdit ? (
            <div className="inner-text">{comment.commentText}</div>
          ) : (
            <CommentControl comment={comment.commentText} {...controlProps} />
          )}

          {/* ACTION */}
          {!isReply || !isEdit ? (
            <CommentItemAction
              langs={langs}
              comment={comment}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
            />
          ) : null}

          {isReply && <CommentControl {...controlProps} />}
        </div>
      </div>

      <ul className="item-child">
        <div className="child-collapse"></div>
        <CommentList
          langs={langs}
          comments={nestedComment}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
        />
      </ul>
    </li>
  );
};

export default CommentItem;
