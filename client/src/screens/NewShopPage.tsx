import { Formik } from 'formik';
import React from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NewShopPage({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <Text>Название магазина</Text>
            <TextInput
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            ></TextInput>
            <Text>Ссылка на сайт(если он есть)</Text>
            <TextInput
              onChangeText={props.handleChange('hashpass')}
              value={props.values.hashpass}
            ></TextInput>
            <Text>Адрес магазниа</Text>
            <TextInput
              onChangeText={props.handleChange('hashpass')}
              value={props.values.hashpass}
            ></TextInput>
            {/* <ScrollView ref={Refs.setRef('scroll')}></ScrollView> */}
            <TouchableOpacity onPress={() => navigation.navigate('NewProductPage')}>
              <Text> Добавить товар </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
