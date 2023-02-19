import React, { useState } from "react";

import { Text, View } from "react-native";
import Calendar from "react-native-calendars/src/calendar";

export default function Calendarik(): JSX.Element {
  return (
    <View>
      <Calendar style={{ borderRadius: 10, elevation: 4, margin: 10 }} 
     onDayPress={date => console.log(date)}
     onMonthChange={()=> {}}
    //  markedDates={{popiss}}

     />
    </View>
  );
}
