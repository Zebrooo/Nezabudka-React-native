import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { addNewProduct } from '../../Redux/ShopSlice/ShopSlice';
import styles from '../../styles/stylesall';
import * as ImagePicker from 'expo-image-picker';

export default function NewProductPage({ navigation }) {
  const [image, setImage] = useState('');
  const shop = useAppSelector((state) => state.shops.oneShop);
  const dispatch = useAppDispatch();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ name: '', price: '', img: '' }}
        onSubmit={(values) => dispatch(addNewProduct({...values, shopid: shop.id, img: image}))}
      >
        {(props) => (
          <View>
            <Text style={styles.text}>Название товара</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            ></TextInput>
            <Text style={styles.text}>Цена товара</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange('price')}
              value={props.values.price}
            ></TextInput>

            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            <Button
              title="Сохранить"
              style={styles.botton}
              onPress={() => {
                props.handleSubmit();
                navigation.navigate('ProfilePage');
              }}
            ></Button>
          </View>
        )}
      </Formik>
    </View>
  );
}
