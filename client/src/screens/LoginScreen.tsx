import { Formik } from "formik";
import React from "react";
import {
  Button,
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "../styles/stylesall";
import logo from "../../assets/logo.png"

export default function LoginScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        ("dismiss keyboard");
      }}
    >
      <SafeAreaView style={styles.main}>
      <Image
          source={logo}
          style={{
            marginTop: 40, width: '100%', height: 160, position: 'absolute', top: 0, resizeMode: 'cover',
          }}
        />
        <Formik
          initialValues={{ email: "", hashpass: "", username: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {(props) => (
            <View style={{ marginTop: "60%", marginLeft: "17%" }}>
              <TextInput
              placeholder="Введите вашу почту"
                keyboardType="email-address"
                style={styles.input}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              ></TextInput>
              <TextInput
              placeholder="Введите ваш пароль"
                style={styles.input}
                onChangeText={props.handleChange("hashpass")}
                value={props.values.hashpass}
              ></TextInput>
              <TouchableOpacity
              style={styles.botton}
                onPress={() => navigation.navigate("SignUpScreen")}
              >
                <Text style={styles.textBtn}> Войти</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
