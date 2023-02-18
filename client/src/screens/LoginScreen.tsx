import { Formik } from 'formik';
import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <Text>Введите ваш логин</Text>
            <TextInput
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            ></TextInput>
            <Text>Введите ваш пароль</Text>
            <TextInput
              onChangeText={props.handleChange('hashpass')}
              value={props.values.hashpass}
            ></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
              <Text> Don't have account?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
