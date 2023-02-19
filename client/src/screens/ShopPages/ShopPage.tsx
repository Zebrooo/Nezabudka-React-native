import { ListItem } from '@react-native-material/core';
import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/stylesall';

export default function ShopPage({ navigation }) {
  return (
    <>
    <TouchableOpacity
     onPress={() => navigation.navigate('WomenPage')}
    >
      <ListItem title="Подарки для женщин" />
    </TouchableOpacity>
      <ListItem title="Подарки для женщин" />
      <ListItem title="Подарки для мужчин" />
    </>
  );
}
