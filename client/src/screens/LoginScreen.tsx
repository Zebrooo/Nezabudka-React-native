import { Formik } from "formik";
import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/stylesall";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: "", hashpass: "", username: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View style={{ marginTop: "40%", marginLeft: "17%" }}>
            <Text style={styles.text}>Введите ваш логин</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            ></TextInput>
            <Text style={styles.text}>Введите ваш пароль</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange("hashpass")}
              value={props.values.hashpass}
            ></TextInput>
            <Button style={styles.botton} onPress={props.handleSubmit} title="Войти">
            <Text style={styles.textBtn}> Войти</Text>
            </Button>
            <TouchableOpacity  style={styles.botton} onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.textBtn}> Регистрация</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
