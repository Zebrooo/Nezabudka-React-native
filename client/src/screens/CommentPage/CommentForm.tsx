import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React from "react";
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch } from "../../Redux/hooks";
import { addNewComment } from "../../Redux/ShopSlice/ShopSlice";
import styles from "../../styles/stylesall";
export default function CommentForm() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ body: "", stars: 0 }}
        onSubmit={(values) =>
          dispatch(addNewComment({ ...values, shopid: shop.id }))
        }
      >
        {(props) => (
          <View>
            <Text style={styles.text}>Название товара</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange("name")}
              value={props.values.body}
            ></TextInput>
            <Text style={styles.text}>Цена товара</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange("price")}
              value={props.values.stars}
            ></TextInput>
            <Button
              title="Отправить"
              color='white'
              onPress={() => {
                props.handleSubmit();
                navigation.navigate("ShopPages");
              }}
            ></Button>
          </View>
        )}
      </Formik>
    </View>
  );
}
