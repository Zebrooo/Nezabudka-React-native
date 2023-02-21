import React from "react";
// import { Text, View } from "react-native";
import { Button, Card, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import type { Event } from '../../Redux/eventSlice/EventType';
import { deleteEventThunk } from "../../Redux/eventSlice/EventSlice";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      <Text variant="bodyMedium">{dateRU}</Text>
      <Text variant="bodyMedium">{event.comment}</Text>
    </Card.Content>
    <Card.Actions >
      <Button onPress={() => {dispatch(deleteEventThunk(event.id))}}><AntDesign name="delete" size={24} color="black" /></Button>
      <Button onPress={() => navigation.navigate("SexPage")}><MaterialCommunityIcons name="gift-open-outline" size={24} color="black" /></Button>
    </Card.Actions>
  </Card>
  );
}