import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { addNewShop } from "../Redux/ShopSlice/ShopSlice";
import { Card, Text, TextInput } from "react-native-paper";
import { TouchableOpacity, View, Button, Picker } from "react-native";
import { Formik } from "formik";
import styles from "../styles/stylesall";
import { useNavigation } from "@react-navigation/native";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
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
      console.log(result, result.assets[0].uri);
      dispatch(
        addNewShop({
          name: "asda",
          http: "sdfa",
          geoteg: "string",
          categoryid: 4,
          img: result.assets[0].uri,
        })
      );
    }
  };
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ name: "", http: "", geoteg: "", categoryid: 0 }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <View>
              <Text style={styles.text}>Название товара</Text>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange("name")}
                value={props.values.name}
              ></TextInput>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange("http")}
                value={props.values.http}
              ></TextInput>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange("geoteg")}
                value={props.values.geoteg}
              ></TextInput>
              <View style={styles.container}>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }
                >
                  {categories.map((category) => (
                    <Picker.Item label={category.name} value={category.id} />
                  ))}
                </Picker>
                <Button
                  title="Pick an image from camera roll"
                  onPress={pickImage}
                />
                <Button
                  title="Добавить фото товаров"
                  style={styles.botton}
                  onPress={() => {
                    props.handleSubmit();
                    navigation.navigate("NewProductPage");
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
