import { signInWithEmailAndPassword, signInWithRedirect } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../config/firebase";
import { setUserFirestorm } from "../Redux/fireStormSlice/userFiresotrmsliceReducer";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { findUserAction, loginAction } from "../Redux/UserSlice/UserSliceReducer";
import { signInWithPopup } from "@firebase/auth";
import { Formik } from "formik";
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
import logo from "../../assets/logo.png";

export default function LoginScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const [value, setValue] = useState("");
  const LoginHandler = (email, hashpass) => {
    signInWithEmailAndPassword(auth, email, hashpass)
      .then(({ user }) => {
        dispatch(
          setUserFirestorm({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
      })
      .catch((error) => console.log(error));
    dispatch(loginAction({ email, hashpass }));
  };
  // const googleHandle = () => {
  //   signInWithRedirect(auth, provider).then((data) => {
  //     setValue(data.user.email);
  //     localStorage.setItem('email', data.user.email);
  //   });
  //   useEffect(() => {
  //     setValue(localStorage.getItem('email'));
  //   });
  // };

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
          initialValues={{ email: "", hashpass: "" }}
          onSubmit={(values, { resetForm }) => {
            LoginHandler(values.email, values.hashpass);
            dispatch(findUserAction())
            resetForm({ values: "" });
          }}
        >
          {(props) => (
            <View style={{ marginTop: "60%", marginLeft: "17%" }}>
              <TextInput
                placeholder="Введите ваш логин"
                keyboardType="email-address"
                style={styles.input}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              ></TextInput>
              <TextInput
              secureTextEntry={true}
                placeholder="Введите ваш пароль"
                style={styles.input}
                onChangeText={props.handleChange("hashpass")}
                value={props.values.hashpass}
              ></TextInput>
              <TouchableOpacity
                style={styles.botton}
                onPress={props.handleSubmit}
              >
                <Text style={{color: 'white', fontSize: 20}}> Войти</Text>
              </TouchableOpacity>
              {/* <Button
                title="Gogl"
                style={styles.botton}
                onPress={googleHandle}
              ></Button> */}
              <TouchableOpacity
                style={styles.botton}
                onPress={() => navigation.navigate("SignUpScreen")}
              >
                <Text style={{color: 'white'}}>Ещё нет аккаунта?</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
