import { Formik } from 'formik';
import React from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProfilePage({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <Text>уведомления</Text>
            <TextInput
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            ></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
              <Text> Добавить фото </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}