import React, { useEffect } from "react";
import { View } from "react-native";
// import { Text, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import MyComponent from "../../components/ModalScreen";
import { visualEventsThunk } from "../../Redux/eventSlice/EventSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import OneEventPage from "./OneEventPage";

export default function AllEventsPage({month, datetuk}) {
  // console.log('qqqqqqqqqqqqqqq', month.month);
  console.log('qwertyu', datetuk);
  
  
  const events = useAppSelector((store) => store?.events?.events);
  const week = new Date().getMonth() + 1;
  // console.log(week);

  function addWeeks(date, weeks) {
    const dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() + 7 * weeks);
    return dateCopy;
  }

  const date = new Date();
  const newDate = addWeeks(date, 3);
  // console.log(date);
  // console.log(newDate); // 2022-06-10T00:00:00.000Z
  // Original not modified
// const newMo = 0 + month
// console.log(newMo);

// && new Date(el.date).getMonth() + 1 === month
  const sortedEvents = events
    ?.map((e) => e)
    .sort((a, b) => new Date(a?.date) - new Date(b?.date));

  // console.log(sortedEvents.filter((el) => {
  //   console.log('hgh', new Date(el.date).getMonth() + 1)
  //   return 
  // }));
    
  return (
    <>
      {sortedEvents
        // ?.filter((el) => new Date(el.date).getMonth() + 1 === week)
        .filter((el) => new Date(el.date) > date && new Date(el.date).getMonth() + 1 === month.month )
        ?.map((event) => (
          <OneEventPage event={event} key={event.id} />
        ))}
        {events.filter((eventdate) => eventdate.date === datetuk).map((edate) => <MyComponent edate={edate}/>)}
    </>
  );
}
