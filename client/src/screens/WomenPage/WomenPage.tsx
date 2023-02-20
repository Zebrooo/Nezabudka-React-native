import { Formik } from "formik";
import React, { useEffect } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  ViewPagerAndroidBase,
} from "react-native";
import styles from "../../styles/stylesall";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { loadShops } from "../../Redux/ShopSlice/ShopSlice";
import { useNavigation } from "@react-navigation/native";

export default function WomenPage() {
  const shops = useAppSelector((state) => state.shops.shops);
  console.log(shops[0]);
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadShops());
  }, []);
  return (
    <View>
      {shops.map((shop) => (
        <Card>
          <Card.Content>
            <Text variant="titleLarge">{shop.name}</Text>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button onPress={() => {
              dispatch()
              navigation.navigate("CommentPage")}}>
              перейти к коментариям
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
}
