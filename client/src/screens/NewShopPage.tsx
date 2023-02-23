import React, { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { addNewShop } from "../Redux/ShopSlice/ShopSlice";
import { Card, Text } from "react-native-paper";
import { TouchableOpacity, View, Button, TextInput } from "react-native";
import { Formik } from "formik";
import styles from "../styles/stylesall";
import { useNavigation } from "@react-navigation/native";
// import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from "react-native-picker-select";

export default function ImagePickerExample() {
  const [image, setImage] = useState("");
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
  const picker = categories.map((cat) => {
    return {
      label: cat.name,
      value: cat.id,
      itemKey: cat.id,
    };
  });

  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ name: "", http: "", geoteg: "", categoryid: 0 }}
        onSubmit={(values) => {
          console.log("====================================");
          console.log({ ...values, categoryid: selectedValue, img: image });
          console.log("====================================");
          dispatch(
            addNewShop({ ...values, categoryid: selectedValue, img: image })
          );
        }}
      >
        {(props) => (
          <View>
            <View style={{ alignItems: "center", marginTop: 100 }}>
              <TextInput
                // style={styles.input}
                placeholder="Название магазина"
                style={styles.input}
                onChangeText={props.handleChange("name")}
                value={props.values.name}
              ></TextInput>
              <TextInput
                placeholder="Ссылка для связи"
                style={styles.input}
                onChangeText={props.handleChange("http")}
                value={props.values.http}
              ></TextInput>
              <TextInput
                placeholder="Адрес"
                style={styles.input}
                onChangeText={props.handleChange("geoteg")}
                value={props.values.geoteg}
              ></TextInput>
              <View>
                <RNPickerSelect
                  style={pickerStyle}
                  placeholder={{ label: "Выбор категории" }}
                  onValueChange={(value) => setSelectedValue(value)}
                  items={picker}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#4587b4",
                height: 58,
                borderRadius: 30,
                width: "70%",
                justifyContent: "center",
                marginLeft: 60,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <Button
                color="white"
                title="Добавить фото магазина"
                onPress={pickImage}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#4587b4",
                height: 58,
                borderRadius: 30,
                width: "70%",
                justifyContent: "center",
                marginLeft: 60,
              }}
            >
              <Button
                color="white"
                title="Добавить товар"
                onPress={() => {
                  props.handleSubmit();
                  navigation.navigate("NewProductPage");
                }}
              ></Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
const pickerStyle = {
  inputIOS: {
    backgroundColor: '#bad9ed',
    height: 40,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    width: 345,
  },
  placeholder: {
      color: 'grey',
    },
  inputAndroid: {
      color: 'white',
      paddingHorizontal: 10,
      backgroundColor: 'red',
      borderRadius: 5,
  },
};