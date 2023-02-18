import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SexPage ({ navigation }) {
  return (
    <View>
      
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
      
    </View>
  );
}