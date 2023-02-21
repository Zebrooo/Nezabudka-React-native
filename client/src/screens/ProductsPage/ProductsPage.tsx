import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { loadProducts } from '../../Redux/ShopSlice/ShopSlice';
import { Category } from '../../Redux/ShopSlice/ShopTypes';

export default function ProductsPage({ navigation }) {
  const dispatch = useAppDispatch()
  const products = useAppSelector((store) => store.shops.products);
  const shop = useAppSelector((store) => store.shops.oneShop);
  useEffect(()=>{
    dispatch(loadProducts(shop.id))
  },[])
  return (
    <ScrollView>
      {products
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
