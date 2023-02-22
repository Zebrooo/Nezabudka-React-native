import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { setShop } from '../../Redux/ShopSlice/ShopSlice';
import { Category } from '../../Redux/ShopSlice/ShopTypes';

export default function ShopsByCategory({ navigation }) {
  const dispatch = useAppDispatch();
  const shops = useAppSelector((state) => state.shops.shops);
  const categoryid = useAppSelector((state) => state.shops.categoryid);
  return (
    <ScrollView>
      {shops
        .filter((shop) => shop.categoryid === categoryid)
        .map((shop) => (
          <Card>
            <Card.Content>
              <Text variant="titleLarge">{shop.name}</Text>
              <Text variant="titleLarge">{shop.geoteg}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: shop.img }} />
            <Card.Actions>
            <Button
                onPress={() => {
                  navigation.navigate({ uri: shop.http});
                  dispatch(setShop(shop));
                }}
              >
                Перейти в магазин
              </Button>
              <Button
                onPress={() => {
                  navigation.navigate('ProductsPage');
                  dispatch(setShop(shop));
                }}
              >
                Популярные товары
              </Button>
              <Button
                onPress={() => {
                  navigation.navigate('AllComments');
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
