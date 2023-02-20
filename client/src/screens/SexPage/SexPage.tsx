import { ListItem } from '@react-native-material/core';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { loadCategories, loadShops } from '../../Redux/ShopSlice/ShopSlice';
import styles from '../../styles/stylesall';

export default function SexPage({ navigation }) {
  const shops = useAppSelector((state) => state.shops.shops);
  const categories= useAppSelector((state) => state.shops.shops);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadShops());
    dispatch(loadCategories())
  }, []);
  return (
    <>
      <ListItem
        title="Подарки для женщин"
        onPress={() => navigation.navigate('WomenPage')}
      />
      <ListItem 
      title="Подарки для мужчин"
      onPress={() => navigation.navigate('ManPage')}
      />
    </>
  );
}
