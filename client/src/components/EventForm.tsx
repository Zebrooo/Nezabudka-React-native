import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import styles from '../styles/stylesall';

export default function EventForm() {
    
  return (
    <Formik
      initialValues={{ name: '', date: '', comment: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {(props) => (
        <View>
          <View>
            <Text>Название события</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              value={props.values.name}
            />
          </View>

          <View>
            <Text style={styles.text}>Дата</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('date')}
              onBlur={props.handleBlur('date')}
              value={props.values.date}
            />
          </View>
          <View>
            <Text style={styles.text}>Комментарий</Text>
            <TextInput
            style={styles.input}
              onChangeText={props.handleChange('comment')}
              onBlur={props.handleBlur('comment')}
              value={props.values.comment}
            />
          </View>
          <Button onPress={props.handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}
