import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { Category } from '../../Redux/ShopSlice/ShopTypes';



export default function ShopsByCategory({ navigation }) {
  const shops = useAppSelector((state) => state.shops.shops);
    const categoryid =  useAppSelector((state) => state.shops.categoryid);
  return (
    <ScrollView>
      {shops
        .filter((shop) => shop.categoryid === categoryid)
        .map((shop) => (
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
    </ScrollView>
  );
}