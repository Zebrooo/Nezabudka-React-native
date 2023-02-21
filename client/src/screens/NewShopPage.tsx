import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { addNewShop } from '../Redux/ShopSlice/ShopSlice';
import { Card, Text, TextInput } from 'react-native-paper';
import { TouchableOpacity, View, Button } from 'react-native';
import { Formik } from 'formik';
import styles from '../styles/stylesall';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const categories = useAppSelector((store) => store.shops.categories);

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
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ name: '', http: '', geoteg: '', categoryid: 0 }}
        onSubmit={(values) => {
          console.log('====================================');
          console.log( {...values, categoryid: selectedValue, img: image });
          console.log('====================================');
          dispatch(
            addNewShop({ ...values, categoryid: selectedValue, img: image })
          );
        }}
      >
        {(props) => (
          <View>
            <View>
              <Text style={styles.text}>Название магазина</Text>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange('name')}
                value={props.values.name}
              ></TextInput>
              <Text style={styles.text}>Ссылка на сайт</Text>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange('http')}
                value={props.values.http}
              ></TextInput>
              <Text style={styles.text}>Геотег</Text>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange('geoteg')}
                value={props.values.geoteg}
              ></TextInput>
              <View>
                <Text style={styles.text}>Категория</Text>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 400, marginBottom: 200 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }
                >
                  {categories.map((category) => (
                    <Picker.Item label={category.name} value={category.id} />
                  ))}
                </Picker>
                <Button title="Добавить фото магазина" onPress={pickImage} />
                <Button
                  title="Добавить Магазин"
                  style={styles.botton}
                  onPress={() => {
                    props.handleSubmit();
                    navigation.navigate('NewProductPage');
                  }}
                ></Button>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
