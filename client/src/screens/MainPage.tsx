import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import Calendar from "react-native-calendars/src/calendar";
import Calendarik from "../components/Calendarik";
import { visualEventsThunk } from "../Redux/eventSlice/EventSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { loadCategories } from "../Redux/ShopSlice/ShopSlice";
import styles from "../styles/stylesall";
import AllEventsPage from "./EventsPage/AllEventsPage";

export default function MainPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(visualEventsThunk());
    dispatch(loadCategories());
  }, []);
  
  return (
    <ScrollView style={styles.main}>
      <Calendarik
      />
      {/* <AgendaPage /> */}
      <View style={{ marginTop: "10%", marginLeft: "17%" }}>
        <Text style={styles.text}>ближайший список событий</Text>
      </View>
      <AllEventsPage />
    </ScrollView>
  );
}
