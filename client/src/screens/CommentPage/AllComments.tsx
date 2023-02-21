import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import CommentPage from "./CommentPage";

export default function AllComments() {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.shops.oneShop.Comments);
const SubmitHandler = () => {
  dispatch()
}
  return (
    <>
      {comments.map((comment) => (
        <CommentPage comment={comment} key={comment.id} />
      ))}
      <TextInput
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></TextInput>

    </>
  );
}
