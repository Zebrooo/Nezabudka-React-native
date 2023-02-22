import { useNavigationState } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Calendar from "react-native-calendars/src/calendar";
import AgendaScreen from "../components/AgendaScreen";
import Calendarik from "../components/Calendarik";
import MyComponent from "../components/ModalScreen";
import { visualEventsThunk } from "../Redux/eventSlice/EventSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { loadCategories } from "../Redux/ShopSlice/ShopSlice";
import styles from "../styles/stylesall";
import AllEventsPage from "./EventsPage/AllEventsPage";

export default function MainPage() {
  const [month, setMonth] = useState({month: new Date().getMonth() + 1})
  const [datetuk, setDatetuk] = useState({dateString: ''})
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(visualEventsThunk());
    dispatch(loadCategories());
  }, []);
  
  return (
    <ScrollView style={styles.main}>
      {/* <AgendaScreen /> */}
      <Calendarik setMonth={setMonth} setDatetuk={setDatetuk}
      />
      {/* <MyComponent /> */}
      <View style={{ marginTop: "10%", marginLeft: "17%" }}>
        <Text style={styles.text}>События месяца</Text>
      </View>
      <AllEventsPage month={month} datetuk={datetuk}/>
    </ScrollView>
  );
}
