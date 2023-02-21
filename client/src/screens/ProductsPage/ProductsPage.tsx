import { Formik } from "formik";
import React, { useEffect } from "react";
import { ScrollView } from "react-native";

import { Avatar, Button, Card, Text } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { Category } from "../../Redux/ShopSlice/ShopTypes";

export default function ProductsPage({ navigation }) {
  const products = useAppSelector((store) => store.shops.products);

  return (
    <ScrollView>
      {products
        .filter((product) => product.shopid)
        .map((product) => (
          <Card>
            <Card.Content>
              <Text variant="titleLarge">{product.name}</Text>
            </Card.Content>
            <Card.Content>
              <Text variant="titleLarge">{product.price}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: product.img }} />
          </Card>
        ))}
    </ScrollView>
  );
}
