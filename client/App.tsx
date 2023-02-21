import React, { useEffect } from "react";
import { LogBox } from "react-native";
import Navigate from "./Navigate";
import "./config/firebase";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import axios from "axios";
import { useAppDispatch } from "./src/Redux/hooks";
import { visualEventsThunk } from "./src/Redux/eventSlice/EventSlice";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://192.168.2.45:3001";
export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <Navigate />
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
