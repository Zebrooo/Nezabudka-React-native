import { Text } from "@react-native-material/core";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

export default function CommentPage() {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state)=> state.shops.oneShop.Comments)
  return (
    <ScrollView>
      <Text>1</Text>
    </ScrollView>
  );
}
