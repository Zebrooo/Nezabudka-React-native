import React, { useState } from "react";

import { Text, View } from "react-native";
import Calendar from "react-native-calendars/src/calendar";
import { modalEvent } from "../Redux/eventSlice/EventSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

export default function Calendarik({setMonth, showModal}): JSX.Element {
  const dispatch = useAppDispatch()
  const events = useAppSelector((store) => store?.events?.events);
  const stringEvent = events.map((event) => event.date);
  let calendarDate = {};
  for (let i = 0; i < stringEvent.length; i++) {
    calendarDate[stringEvent[i]] = { marked: true, selected: true, selectedColor: '#4587b4' };
  }
  return (
    <View>
      <Calendar
      
        style={{ borderRadius: 10, elevation: 4, margin: 10 }}
        onDayPress={(date) => {
          showModal(true)
          const modalDate = events.find((event) => event.date === date.dateString)
          if(modalDate){
            dispatch(modalEvent(modalDate))
            showModal(true)
          }
        }}
        onMonthChange={(a) => setMonth(a)}
        markedDates={calendarDate}
      />
      
    </View>
  );
}
