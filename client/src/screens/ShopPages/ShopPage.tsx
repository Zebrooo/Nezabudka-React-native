import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/stylesall';

export default function ShopPage({ navigation }) {
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ManPage')}>
              <Text style={styles.text}> тут какие то фильтры</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WomenPage')}>
              <Text style={styles.text}> тут карта</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
