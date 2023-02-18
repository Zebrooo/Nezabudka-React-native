import { Formik } from 'formik';
import React from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/stylesall';

export default function NewShopPage({ navigation }) {
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <Text style={styles.text}>Название магазинаa</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            ></TextInput>
            <Text style={styles.text}>Ссылка на сайт(если он есть)</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('hashpass')}
              value={props.values.hashpass}
            ></TextInput>
            <Text style={styles.text}>Адрес магазниа</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('hashpass')}
              value={props.values.hashpass}
            ></TextInput>
            {/* <ScrollView ref={Refs.setRef('scroll')}></ScrollView> */}
            <TouchableOpacity onPress={() => navigation.navigate('NewProductPage')}>
              <Text style={styles.text}> Добавить товар </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
