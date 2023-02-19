import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/stylesall';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { loadShops } from '../../Redux/ShopSlice/ShopSlice';

export default function WomenPage({ navigation }) {
  const shops = useAppSelector((state) => state.shops.shops);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadShops());
  }, []);
  return (
  <>
  
  {shops.map((shop) => {
    <Card>
      <Card.Title
        title={shop.name}
        subtitle="Card Subtitle"
      />
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>;
  })}
  </>
  
  );
}
