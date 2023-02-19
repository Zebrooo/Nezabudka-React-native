import { signInWithEmailAndPassword } from "@firebase/auth";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth, provider } from "../../config/firebase";
import { setUserFirestorm } from "../Redux/fireStormSlice/userFiresotrmsliceReducer";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { loginAction } from "../Redux/UserSlice/UserSliceReducer";
import { signInWithPopup } from "@firebase/auth";

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
  const googleHandle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
    useEffect(() => {
      setValue(localStorage.getItem("email"));
    });
  };

  return (
    <View>
      <Formik
        initialValues={{ email: "", hashpass: "" }}
        onSubmit={(values, { resetForm }) => {
          LoginHandler(values.email, values.hashpass);
          console.log(values);

          resetForm({ values: "" });
        }}
      >
        {(props) => (
          <View>
            <Text>Введите ваш логин</Text>
            <TextInput
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            ></TextInput>
            <Text>Введите ваш пароль</Text>
            <TextInput
              onChangeText={props.handleChange("hashpass")}
              value={props.values.hashpass}
            ></TextInput>
            <Button title="login" onPress={props.handleSubmit}></Button>
            <View>
              {/* <TouchableOpacity onPress={googleHandle}>
                <Text> ggole</Text>
              </TouchableOpacity> */}
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text> Don't have account?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
