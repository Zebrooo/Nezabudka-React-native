import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ShopPage({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ManPage')}>
              <Text> тут какие то фильтры</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WomenPage')}>
              <Text> тут карта</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
