import { Formik } from "formik";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { setUserFirestorm } from "../Redux/fireStormSlice/userFiresotrmsliceReducer";
import { registrationAction } from "../Redux/UserSlice/UserSliceReducer";
import  type { User } from "../Redux/UserSlice/UserType";

export default function SignUpScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const SignUpHandler = (email, password, name): void => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
    <View>
      <Formik
        initialValues={{ email: "", hashpass: "", username: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <Text>Введите ваш логин</Text>
            <TextInput
              onChangeText={props.handleChange("username")}
              value={props.values.username}
            ></TextInput>
            <Text>Введите вашу почту</Text>
            <TextInput
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            ></TextInput>
            <Text>Введите ваш пароль</Text>
            <TextInput
              onChangeText={props.handleChange("hashpass")}
              value={props.values.hashpass}
            ></TextInput>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text> Already account?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
