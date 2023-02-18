import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/stylesall';

export default function SexPage ({ navigation }) {
  return (
    <View style={styles.main}>
      
          <View>
             <TouchableOpacity
              onPress={() => navigation.navigate('ManPage')}
            >
              <Text style={styles.text}> Подарок для мужчины</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('WomenPage')}
            >
              <Text style={styles.text}> Подарок для женщины</Text>
            </TouchableOpacity>
          </View>
      
    </View>
  );
}