import React, { useEffect } from "react";
import { View } from "react-native";
// import { Text, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { visualEventsThunk } from "../../Redux/eventSlice/EventSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import OneEventPage from "./OneEventPage";

export default function AllEventsPage() {
  const events = useAppSelector((store) => store?.events?.events);
  const week = new Date().getMonth()+1
  console.log(week);
  
  const sortedEvents = events
    ?.map((e) => e)
    .sort((a, b) => new Date(b?.date) - new Date(a?.date));


  return (
    <>
      {sortedEvents?.filter((el) => new Date(el.date).getMonth()+1 === week)?.map((event) => (
        <OneEventPage event={event} key={event.id} />
      ))}
    </>
  );
}
