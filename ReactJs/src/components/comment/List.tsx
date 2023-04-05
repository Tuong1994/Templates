import React from "react";
import { Langs } from "lang";
import { IActiveComment } from ".";
import { IComment } from "common/interface/comment";
import CommentItem from "./Item";

interface CommentListProps {
  langs: Langs;
  comments: IComment[];
  activeComment: IActiveComment;
  setActiveComment: React.Dispatch<React.SetStateAction<IActiveComment>>;
}

const CommentList: React.FC<CommentListProps> = ({
  langs,
  comments,
  activeComment,
  setActiveComment,
}) => {

  return (
    <ul className="comment-list">
      {comments.map((c) => (
        <CommentItem
          key={c.id}
          comment={c}
          langs={langs}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
        />
      ))}
    </ul>
  );
};

export default CommentList;
