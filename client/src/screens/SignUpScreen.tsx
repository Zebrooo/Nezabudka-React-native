import { Formik } from "formik";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
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
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { setUserFirestorm } from "../Redux/fireStormSlice/userFiresotrmsliceReducer";
import { findUserAction, registrationAction } from "../Redux/UserSlice/UserSliceReducer";
import type { User } from "../Redux/UserSlice/UserType";
import styles from "../styles/stylesall";
import logo from "../../assets/logo.png";

export default function SignUpScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const SignUpHandler = (email, hashpass, username): void => {
    createUserWithEmailAndPassword(auth, email, hashpass)
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
    dispatch(registrationAction({ email, hashpass, username }));
  };
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
            marginTop: 40,
            width: "100%",
            height: 160,
            position: "absolute",
            top: 0,
            resizeMode: "cover",
          }}
        />
        <Formik
          initialValues={{ email: "", hashpass: "", username: "" }}
          onSubmit={(values, { resetForm }) => {
            SignUpHandler(values.email, values.hashpass, values.username);
            resetForm({ values: "" });
            dispatch(findUserAction())
          }}
        >
          {(props) => (
            <View style={{ marginTop: "60%", marginLeft: "17%" }}>
              <TextInput
                placeholder="Придумайте логин"
                style={styles.input}
                onChangeText={props.handleChange("username")}
              ></TextInput>
              <TextInput
                placeholder="Введите вашу почту"
                keyboardType="email-address"
                style={styles.input}
                onChangeText={props.handleChange("email")}
              ></TextInput>
              <TextInput
              secureTextEntry={true}
                placeholder="Придумайте пароль"
                style={styles.input}
                onChangeText={props.handleChange("hashpass")}
              ></TextInput>
              <View style={styles.botton}>
                <Button
                  style={styles.botton}
                  color='white'
                  onPress={props.handleSubmit}
                  title='Регистрация'
                ></Button>
              </View>
              <TouchableOpacity style={styles.botton}
                onPress={() => navigation.navigate("SignInScreen")}
              >
                <Text style={{color: 'white'}}>Есть аккаунт?</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
