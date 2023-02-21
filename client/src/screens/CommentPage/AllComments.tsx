import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import CommentPage from "./CommentPage";
import { Rating, AirbnbRating } from "react-native-ratings";
import { addNewComment } from "../../Redux/ShopSlice/ShopSlice";

export default function AllComments() {
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(1);
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.id);
  const shop = useAppSelector((state) => state.shops.oneShop);

  const SubmitHandler = () => {
    dispatch(
      addNewComment({
        body: input,
        stars: number,
        shopid: shop.id,
        userid: user,
      })
    );
    setInput("");
    setNumber(1);
  };
  console.log(number);
  return (
    <>
      {shop.Comments.map((comment) => (
        <CommentPage comment={comment} key={comment.id} />
      ))}
      <TextInput
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></TextInput>
      <AirbnbRating
        count={5}
        // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "БобР", "СОВА", "ЁЖ",]}
        defaultRating={number}
        onFinishRating={(s) => setNumber(s)}
        size={20}
      />
      <Button onPress={SubmitHandler}> Отправить</Button>
    </>
  );
}
