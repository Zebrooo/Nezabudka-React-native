import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { loadProducts } from '../../Redux/ShopSlice/ShopSlice';
import { Category } from '../../Redux/ShopSlice/ShopTypes';
import styles from '../../styles/stylesall';

export default function ProductsPage({ navigation }) {
  const dispatch = useAppDispatch()
  const products = useAppSelector((store) => store.shops.products);
  const shop = useAppSelector((store) => store.shops.oneShop);
  useEffect(()=>{
    dispatch(loadProducts(shop.id))
  },[])
  return (
    <ScrollView style={styles.main}>
      {products
        .map((product) => (
          <Card style={{margin: 10}}>
            <Card.Content>
              <Text style={{fontSize: 20, fontWeight: 'bold'}} variant="titleLarge">{product.name}</Text>
              <Text style={{fontSize: 14}} variant="titleLarge">Стоимость: {product.price} руб. за шт.</Text>
            </Card.Content>
            <Card.Cover style={{width: '100%', height: 450}} source={{ uri: product.img }} />
          </Card>
        ))}
    </ScrollView>
  );
}
