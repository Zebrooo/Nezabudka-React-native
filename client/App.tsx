import React, { useEffect } from "react";
import { LogBox } from "react-native";
import Navigate from "./Navigate";
import "./config/firebase";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import axios from "axios";
import { useAppDispatch } from "./src/Redux/hooks";
import { visualEventsThunk } from "./src/Redux/eventSlice/EventSlice";
import CommentPage from "./src/screens/CommentPage/CommentPage";
import NotificationScreen, { schedulePushNotification } from "./src/screens/Notifications/NotificationScreen";
import AllComments from "./src/screens/CommentPage/AllComments";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://192.168.1.56:3001";
export default function App() {
  const timerId = setTimeout(() => {
    schedulePushNotification()
  }, 2000)
  
  console.log(timerId)
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <NotificationScreen />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
