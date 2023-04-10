import { create, StateCreator } from "zustand";
import { IComment } from "@/common/interface/comment";

interface CommentStore {
  comments: IComment[];
  getRootComments(): IComment[];
  getReplies(id: string): IComment[];
}

const store: StateCreator<CommentStore> = (set, get) => ({
  comments: [
    {
      id: "1",
      customerName: "Kevin",
      commentText:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, veritatis!",
      parentId: "",
      createdAt: new Date(),
    },
    {
      id: "2",
      customerName: "Shop",
      commentText:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, veritatis!",
      parentId: "1",
      createdAt: new Date(),
    },
    {
      id: "3",
      customerName: "Williams",
      commentText:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, veritatis!",
      parentId: "1",
      createdAt: new Date(),
    },
    {
      id: "4",
      customerName: "Kevin",
      commentText:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, veritatis!",
      parentId: "2",
      createdAt: new Date(),
    },
    {
      id: "5",
      customerName: "John",
      commentText:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, veritatis!",
      parentId: "3",
      createdAt: new Date(),
    },
  ],
  getRootComments: () => {
    const comments = get().comments
    return comments
      .filter((c) => !c.parentId)
      .sort(
        (a: IComment, b: IComment) =>
          new Date(b.createdAt ?? "").getTime() - new Date(a.createdAt ?? "").getTime()
      );
  },
  getReplies: (id) => {
    const comments = get().comments;
    return comments
      .filter((r) => r.parentId === id)
      .sort(
        (a: IComment, b: IComment) =>
          new Date(b.createdAt ?? "").getTime() - new Date(a.createdAt ?? "").getTime()
      );
  },
});

const useCommentStore = create(store);

export default useCommentStore;
