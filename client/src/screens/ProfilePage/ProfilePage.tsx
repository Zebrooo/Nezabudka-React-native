import { Formik } from "formik";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import styles from "../../styles/stylesall";
import PhotoProfilePage from "./PhotoProfilePAge";

export default function ProfilePage({ navigation }) {
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: "", hashpass: "", username: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <PhotoProfilePage />
            <Text style={styles.text}>уведомления</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            ></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('NewShopPage')}>
              <Text style={styles.text}> Добавить Магазин</Text>
            </TouchableOpacity>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Добавить магазин
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
}
