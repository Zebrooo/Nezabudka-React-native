import React, { useEffect } from "react";
import { View } from "react-native";
// import { Text, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { visualEventsThunk } from "../../Redux/eventSlice/EventSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import OneEventPage from "./OneEventPage";

export default function AllEventsPage() {
  const events = useAppSelector((store) => store?.events?.events);
  const dispatch = useAppDispatch();
//   console.log(events);
  useEffect(() => {
    console.log('hello');
    
    dispatch(visualEventsThunk());
  }, []);

  return (
    <>
      {events?.map((event) => (
        <OneEventPage  event={event} key={event.id}/>
      ))}
    </>
  );
}
