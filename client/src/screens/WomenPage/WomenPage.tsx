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
              onPress={() => navigation.navigate('FlowerShopPage')}
            >
              <Text style={styles.text}>Цветы</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('JeweleryShopPage')}
            >
              <Text style={styles.text}> Ювелирные украшения</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('GiftShopPage')}
            >
              <Text style={styles.text}> Простой подарок</Text>
            </TouchableOpacity>
            <TouchableOpacity
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