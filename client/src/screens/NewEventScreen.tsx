import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/stylesall';

export default function NewEventScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View style={{ marginTop: "40%", marginLeft: "17%"}}>
            <Text style={styles.text}>Введите название события</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            ></TextInput>
            <Text style={styles.text}>Выберите дату</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('hashpass')}
              value={props.values.hashpass}
            ></TextInput>
            <Text style={styles.text}>увлечения человека</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('hashpass')}
              value={props.values.hashpass}
            ></TextInput>
            <TouchableOpacity
            style={styles.botton}
              onPress={() => navigation.navigate('MainPage')}
            >
              <Text style={styles.text}> кнопка добавления</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
