import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function WomenPage ({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
             <TouchableOpacity
              onPress={() => navigation.navigate('ClockShopPage')}
            >
              <Text>Часы</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AutoShopPage')}
            >
              <Text> Автомбильные акссесуары</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('GiftShopPage')}
            >
              <Text> Простой подарок</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('CardShopPage')}
            >
              <Text> Сертификаты</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}