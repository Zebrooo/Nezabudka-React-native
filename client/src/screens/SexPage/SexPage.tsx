import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SexPage ({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
             <TouchableOpacity
              onPress={() => navigation.navigate('ManPage')}
            >
              <Text> Подарок для мужчины</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('WomenPage')}
            >
              <Text> Подарок для женщины</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}