import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import CommentPage from "./CommentPage";

export default function AllComments() {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.shops.oneShop.Comments);
  return (
    <>
      {comments.map((comment) => (
        <CommentPage comment={comment} key={comment.id} />
      ))}
    </>
  );
}
