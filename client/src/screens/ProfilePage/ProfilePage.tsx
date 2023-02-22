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
import { useDispatch } from "react-redux";
import { removeUserFirestorm } from "../../Redux/fireStormSlice/userFiresotrmsliceReducer";
import { userLogoutAction } from "../../Redux/UserSlice/UserSliceReducer";
import styles from "../../styles/stylesall";
import PhotoProfilePage from "./PhotoProfilePAge";

export default function ProfilePage({ navigation }) {
  const dispatch = useDispatch();
  const logOutEveryMode = () => {
    dispatch(userLogoutAction());
    dispatch(removeUserFirestorm());
  };

  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ email: "", hashpass: "", username: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <PhotoProfilePage />

            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#4587b4",
                height: 58,
                borderRadius: 30,
                width: "70%",
                justifyContent: "center",
                marginLeft: 60,
                marginBottom:10
              }}
              onPress={() => navigation.navigate("NewShopPage")}
            >
              <Text style={{color: 'white', fontSize: 24}}> Добавить Магазин</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                alignItems: "center",
                backgroundColor: "#4587b4",
                height: 58,
                borderRadius: 30,
                width: "70%",
                justifyContent: "center",
                marginLeft: 60,
              }} onPress={logOutEveryMode}>
              <Text style={{color: 'white', fontSize: 24}}>Выход</Text>
            </TouchableOpacity>

            {/* <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Добавить магазин
            </Button> */}
          </View>
        )}
      </Formik>
    </View>
  );
}
