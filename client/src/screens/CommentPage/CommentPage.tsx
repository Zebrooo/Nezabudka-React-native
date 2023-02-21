import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { Card, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CommentPage({ comment }) {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.shops.oneShop.Comments);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <Text variant="titleLarge">{comment.body}</Text>
          <Text variant="bodyMedium">{comment.stars}</Text>
        </Card.Content>
        <TouchableOpacity onPress={navigation.navigate('CommentForm')}>
          <Text> Оставить комментарий </Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
}
