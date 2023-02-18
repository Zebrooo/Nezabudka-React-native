import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/stylesall';

export default function WomenPage ({ navigation }) {
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: '', hashpass: '', username: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
             <TouchableOpacity
             style={styles.botton}
              onPress={() => navigation.navigate('ClockShopPage')}
            >
              <Text style={styles.text}>Часы</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.botton}
              onPress={() => navigation.navigate('AutoShopPage')}
            >
              <Text style={styles.text}> Автомбильные акссесуары</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.botton}
              onPress={() => navigation.navigate('GiftShopPage')}
            >
              <Text style={styles.text}> Простой подарок</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.botton}
              onPress={() => navigation.navigate('CardShopPage')}
            >
              <Text style={styles.text}> Сертификаты</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}