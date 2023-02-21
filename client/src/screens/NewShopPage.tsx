import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAppDispatch } from '../Redux/hooks';
import { addNewShop } from '../Redux/ShopSlice/ShopSlice';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const dispatch = useAppDispatch()

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
      console.log(result, result.assets[0].uri);
      dispatch(addNewShop({ 
        name: 'asda',
        http: 'sdfa',
        geoteg: 'string',
        categoryid: 4,
        img: result.assets[0].uri}))
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Button title="Pick an image from camera roll" onPress={pickImage} />

    </View>
  );
}
