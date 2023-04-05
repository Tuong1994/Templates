import React from "react";
import * as Antd from "antd";
import { IComment } from "@/common/interface/comment";
import useLangStore from "@/store/LangStore";
import useCommentStore from "@/store/CommentStore";
import CommentControl from "./Control";
import CommentList from "./List";

interface CommentProps {}

export interface IActiveComment {
  action: string;
  commentId: string;
}

const Comment: React.FC<CommentProps> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const getRootComments = useCommentStore((state) => state.getRootComments);

  const rootComments = getRootComments();

  const [activeComment, setActiveComment] = React.useState<IActiveComment>({
    action: "",
    commentId: "",
  });

  const handleAdd = (c: string) => {};

  const handleUpdate = (id: string, c: string) => {};

  const handleDelete = (id: string) => {};

  return (
    <Antd.Card className="comment">
      <CommentControl langs={langs} />
      <CommentList
        langs={langs}
        comments={rootComments}
        activeComment={activeComment}
        setActiveComment={setActiveComment}
      />
    </Antd.Card>
  );
};

export default Comment;
