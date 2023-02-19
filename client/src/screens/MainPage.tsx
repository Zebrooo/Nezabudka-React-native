import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import Calendar from "react-native-calendars/src/calendar";
import { visualEventsThunk } from "../Redux/eventSlice/EventSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import styles from "../styles/stylesall";
import AllEventsPage from "./EventsPage/AllEventsPage";

export default function MainPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(visualEventsThunk());
  }, []);
  const events = useAppSelector((store) => store?.events?.events);
  return (
    <ScrollView style={styles.main}>
      <Calendar
        style={{ borderRadius: 10, elevation: 4, margin: 10 }}
        markingType={"dot"}
      />
      <View style={{ marginTop: "10%", marginLeft: "17%" }}>
        <Text style={styles.text}>ближайший список событий</Text>
      </View>
      <AllEventsPage />
    </ScrollView>
  );
}
