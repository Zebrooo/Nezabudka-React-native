import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Image,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Modal,
  Pressable,
} from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { useIsFocused } from "@react-navigation/native";
import { useAppSelector } from "../../Redux/hooks";
import {
    findUser,
  findUserAction,
  userLogoutAction,
} from "../../Redux/UserSlice/UserSliceReducer";
import { removeUserFirestorm } from "../../Redux/fireStormSlice/userFiresotrmsliceReducer";
import defaultAvatar from "../../../assets/defaultAvatar.svg.png";

export default function PhotoProfilePage({ navigation }) {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [changeAvatarStatus, setChangeAvatarStatus] = useState(false);
  
  useEffect(() => {
      dispatch(findUserAction())
    }, [])
    console.log(user);

  // useEffect(() => {
  //   if (avatar.length) {
  //     setChangeAvatarStatus(!changeAvatarStatus);
  //   }
  // }, [avatar]);

  const logOutEveryMode = () => {
    dispatch(userLogoutAction());
    dispatch(removeUserFirestorm());
  };
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      console.log(result, result.assets[0].uri);
      dispatch(addNewShop({ 
        avatar: result.assets[0].uri}))
    
    }
  };

  // const uploadImage = async () => {
  //   const formData = new FormData();
  //   formData.append("avatar", {
  //     name: `${new Date().toString()}`,
  //     uri: avatar,
  //     type: "image/jpg",
  //   });

  //   try {
  //     await axios.post("/user/upload-avatar", formData, {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     setChangeAvatarStatus(false);
  //     dispatch(findUserAction());
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <View>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} />}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ margin: 10, fontSize: 20}}>
              Привет {user.username}
            </Text>
          </View>
        </View>
        {/* <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={logOutEveryMode}>
            <Text>Выход</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  profileRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
