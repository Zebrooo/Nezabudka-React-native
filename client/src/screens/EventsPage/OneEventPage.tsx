import React from "react";
// import { Text, View } from "react-native";
import { Button, Card, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import type { Event } from '../../Redux/eventSlice/EventType';
import { deleteEventThunk } from "../../Redux/eventSlice/EventSlice";
import { useNavigation } from "@react-navigation/native";

type OneEventPageProps = {
    event: Event;
  };
  export default function OneEventPage({event}: OneEventPageProps) {
  const dispatch = useAppDispatch() 
  const navigation = useNavigation(); 
  const options = { month: "long", day: "numeric" };
  const dateRU = new Date(event.date).toLocaleDateString("ru-US", options)
  return (
    <Card style={{margin: 10}}>
    <Card.Content>
      <Text variant="titleLarge">{event.name}</Text>
      <Text variant="bodyMedium">{event.comment}</Text>
      <Text variant="bodyMedium">{dateRU}</Text>
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => {dispatch(deleteEventThunk(event.id))}}>Удалить</Button>
      <Button title="Go to notifications" onPress={() => navigation.navigate("SexPage")}>Подарок</Button>
    </Card.Actions>
  </Card>
  );
}