import { Formik } from "formik";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { setUserFirestorm } from "../Redux/fireStormSlice/userFiresotrmsliceReducer";
import { registrationAction } from "../Redux/UserSlice/UserSliceReducer";
import type { User } from "../Redux/UserSlice/UserType";
import styles from "../styles/stylesall";

export default function SignUpScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const SignUpHandler = (email, password, name): void => {
    console.log({ email, password, name });
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUserFirestorm({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
    dispatch(registrationAction({ email, password, name }));
  };
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: "", hashpass: "", username: "" }}
        onSubmit={(values, { resetForm }) => {
          SignUpHandler(values.email, values.hashpass, values.username);
          resetForm({ values: "" });
        }}
      >
        {(props) => (
          <View style={{ marginTop: "40%", marginLeft: "17%" }}>
            <Text style={styles.text}>Введите ваш логин</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange("username")}
            ></TextInput>
            <Text style={styles.text}>Введите вашу почту</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange("email")}
            ></TextInput>
            <Text style={styles.text}>Введите ваш пароль</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange("hashpass")}
            ></TextInput>
            <Button onPress={props.handleSubmit} title="Sign up"></Button>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Text style={styles.textBtn}>Регистрация</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
