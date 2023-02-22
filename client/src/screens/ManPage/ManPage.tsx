import { ListItem } from '@react-native-material/core';
import { Formik } from 'formik';
import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { setCategory } from '../../Redux/ShopSlice/ShopSlice';
import styles from '../../styles/stylesall';

export default function ManPage({ navigation }) {
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.shops.categories).filter(
    (c) => c.sex === 'unisex' || c.sex === 'man'
  );
  return (
    <ScrollView style={styles.main}>
      {categories.map((category) => (
        <ListItem
        
          title={category.name}
          onPress={() => {
            navigation.navigate('ShopsByCategory')
            dispatch(setCategory(category.id))
          }}
          key={category.id}
        />
      ))}
    </ScrollView>
  );
}
