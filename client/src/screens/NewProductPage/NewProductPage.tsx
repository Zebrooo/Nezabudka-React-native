import { Formik } from "formik";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { addNewProduct } from "../../Redux/ShopSlice/ShopSlice";
import styles from "../../styles/stylesall";
import * as ImagePicker from "expo-image-picker";

export default function NewProductPage({ navigation }) {
  const [image, setImage] = useState("");
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
        initialValues={{ name: "", price: "", img: "" }}
        onSubmit={(values) =>
          dispatch(addNewProduct({ ...values, shopid: shop.id, img: image }))
        }
      >
        {(props) => (
          <View style={{ alignItems: "center", marginTop: 100 }}>
            <TextInput
              placeholder="Название товара"
              style={styles.input}
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            ></TextInput>
            {/* <Text style={styles.text}>Цена товара</Text> */}
            <TextInput
              placeholder="Цена товара"
              style={styles.input}
              onChangeText={props.handleChange("price")}
              value={props.values.price}
            ></TextInput>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#4587b4",
                height: 58,
                borderRadius: 30,
                width: "70%",
                justifyContent: "center",
                // marginLeft: 60,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <Button color="white" title="Добавить фото" onPress={pickImage} />
            </View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#4587b4",
                height: 58,
                borderRadius: 30,
                width: "70%",
                justifyContent: "center",
                // marginLeft: 60,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <Button
                color="white"
                title="Сохранить"
                onPress={() => {
                  props.handleSubmit();
                  navigation.navigate("ProfilePage");
                }}
              ></Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
