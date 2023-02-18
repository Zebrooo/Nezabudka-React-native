import { Formik } from 'formik';
import React from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/stylesall';

export default function NewProductPage({ navigation }) {
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <Text style={styles.text}>Название товара</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            ></TextInput>
            <Text style={styles.text}>Цена товара</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            ></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={styles.text}> Добавить фото </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}