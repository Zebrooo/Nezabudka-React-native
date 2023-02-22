import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  DatePickerIOS,
  DatePickerIOSBase,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import DateField from 'react-native-datefield';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/stylesall';
import { useAppDispatch } from '../Redux/hooks';
import { addEventThunk } from '../Redux/eventSlice/EventSlice';
import { Button } from 'react-native-paper';

export default function NewEventScreen({ navigation }) {
  const date = new Date();
  const [chosenDate, setChosenDate] = useState(date);
  console.log(setChosenDate);
  const dispatch = useAppDispatch();
  

  const [input, setInput] = useState({
    name: '',
    date: '',
    comment: '',
  });
  console.log(setInput);

  const addEventHandler = (name, date, comment) => {
    if (name.length > 0 && date.length > 0) {
      dispatch(addEventThunk({ name, date, comment }));

      navigation.navigate('HomeScreen');
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.main}>
        <Formik
          initialValues={{ name: '', date: '', comment: '' }}
          onSubmit={(values, { resetForm }) => {
            addEventHandler(values.name, values.date, values.comment);
            //setTimeout(() => {
            //   schedulePushNotification()
            // }, 2000)
            resetForm({ values: '' });
          }}
        >
          {(props) => (
            <View style={{ marginTop: '40%', marginLeft: '17%' }}>
              <Text style={styles.text}>Введите название события</Text>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange('name')}
                value={props.values.name}
              ></TextInput>
              <Text style={styles.text}>Выберите дату</Text>
              <TextInputMask
                placeholder="ГГГГ-ММ-ДД"
                type={'datetime'}
                options={{
                  format: 'YYYY-MM-DD',
                }}
                style={styles.input}
                value={props.values.date}
                onChangeText={props.handleChange('date')}
              />
              <Text style={styles.text}>Комментарий</Text>
              <TextInput
                style={styles.input}
                multiline={true}
                onChangeText={props.handleChange('comment')}
                value={props.values.comment}
              ></TextInput>
              <TouchableOpacity
                style={styles.botton}
                onPress={props.handleSubmit}
              >
                <Text style={styles.text}>Добавить</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
}
