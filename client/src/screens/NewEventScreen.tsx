import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NewEventScreen({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <Text>Введите название события</Text>
            <TextInput
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            ></TextInput>
            <Text>Выберите дату</Text>
            <TextInput
              onChangeText={props.handleChange('hashpass')}
              value={props.values.hashpass}
            ></TextInput>
            <Text>увлечения человека</Text>
            <TextInput
              onChangeText={props.handleChange('hashpass')}
              value={props.values.hashpass}
            ></TextInput>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainPage')}
            >
              <Text> кнопка добавления</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
