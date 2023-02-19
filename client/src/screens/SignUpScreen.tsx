import { Formik } from "formik";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { setUserFirestorm } from "../Redux/fireStormSlice/userFiresotrmsliceReducer";
import { registrationAction } from "../Redux/UserSlice/UserSliceReducer";
import type { User } from "../Redux/UserSlice/UserType";

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
    <View>
      <Formik
        initialValues={{ email: "", hashpass: "", username: "" }}
        onSubmit={(values, { resetForm }) => {
          SignUpHandler(values.email, values.hashpass, values.username);
          resetForm({ values: "" });
        }}
      >
        {(props) => (
          <View>
            <Text>Введите ваш логин</Text>
            <TextInput
              value={props.values.username}
              onChangeText={props.handleChange("username")}
            ></TextInput>
            <Text>Введите вашу почту</Text>
            <TextInput
              value={props.values.email}
              onChangeText={props.handleChange("email")}
            ></TextInput>
            <Text>Введите ваш пароль</Text>
            <TextInput
              value={props.values.hashpass}
              onChangeText={props.handleChange("hashpass")}
            ></TextInput>
            <Button onPress={props.handleSubmit} title="Sign up"></Button>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Text> Already have account?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
