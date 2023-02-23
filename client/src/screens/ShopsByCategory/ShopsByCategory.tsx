import { Formik } from "formik";
import React, { useEffect } from "react";
import { Linking, ScrollView, TouchableOpacity, View } from "react-native";

import { Avatar, Button, Card, Text } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setShop } from "../../Redux/ShopSlice/ShopSlice";
import { Category, Comment } from "../../Redux/ShopSlice/ShopTypes";
import { AntDesign } from "@expo/vector-icons";
import styles from "../../styles/stylesall";

export default function ShopsByCategory({ navigation }) {
  const dispatch = useAppDispatch();
  const shops = useAppSelector((state) => state.shops.shops);
  const categoryid = useAppSelector((state) => state.shops.categoryid);
  const funcScore = (arr: Comment[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i].stars);
    }
    return sum / arr.length;
  };
  return (
    <ScrollView style={styles.main}>
      {shops
        .filter((shop) => shop.categoryid === categoryid)
        .map((shop) => (
          <Card style={{ margin: 10 }}>
            <Card.Content style={{ backgroundColor: "#bad9ed" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold" }}
                variant="titleLarge"
              >
                {shop.name}
              </Text>
              <Text style={{ fontSize: 14 }} variant="titleLarge">
                {shop.geoteg}
              </Text>

              <Text style={{ fontSize: 14}} variant="titleLarge">
                Рейтинг:{funcScore(shop.Comments)}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(shop.http);
                }}
              >
                <Text style={{ fontSize: 14 }}>Перейти на сайт</Text>
              </TouchableOpacity>
            </Card.Content>
            <Card.Cover
              style={{ height: 100, width: "100%" }}
              source={{ uri: shop.img }}
            />
            <Card.Actions style={{ backgroundColor: "white" }}>
              <Button
                textColor="#4587b4"
                onPress={() => {
                  navigation.navigate("ProductsPage");
                  dispatch(setShop(shop));
                }}
              >
                Популярные товары
              </Button>
              <Button
                buttonColor="#4587b4"
                onPress={() => {
                  navigation.navigate("AllComments");
                  dispatch(setShop(shop));
                }}
              >
                Комментарии
              </Button>
            </Card.Actions>
          </Card>
        ))}
    </ScrollView>
  );
}
