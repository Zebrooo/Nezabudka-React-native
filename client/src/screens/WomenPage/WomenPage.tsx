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

export default function WomenPage({ navigation }) {
  const shops = useAppSelector((state) => state.shops.shops);
  console.log(shops[0]);

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
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>перейти к товарам</Button>
        </Card.Actions>
      </Card>
      ))}
    </View>
  );
}
