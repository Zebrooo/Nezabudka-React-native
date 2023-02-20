import React, { useState } from "react";

import { Text, View } from "react-native";
import Calendar from "react-native-calendars/src/calendar";
import { useAppSelector } from "../Redux/hooks";

export default function Calendarik(): JSX.Element {
  const events = useAppSelector((store) => store?.events?.events);
  const stringEvent = events.map((event) => event.date);
  let calendarDate = {};
  for (let i = 0; i < stringEvent.length; i++) {
    calendarDate[stringEvent[i]] = { marked: true, selected: true };
    console.log(calendarDate);
  }

  return (
    <View>
      <Calendar
        style={{ borderRadius: 10, elevation: 4, margin: 10 }}
        onDayPress={(date) => console.log(date)}
        onMonthChange={() => {}}
        markedDates={calendarDate}
      />
    </View>
  );
}
