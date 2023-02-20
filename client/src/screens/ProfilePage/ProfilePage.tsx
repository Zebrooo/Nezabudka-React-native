import { Formik } from 'formik';
import React from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/stylesall';

export default function ProfilePage({ navigation }) {
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <Text style={styles.text}>уведомления</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            ></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('NewShopPage')}>
              <Text style={styles.text}> Добавить фото </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}