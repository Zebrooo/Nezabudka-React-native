import { ListItem } from '@react-native-material/core';
import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/stylesall';

export default function SexPage({ navigation }) {
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
