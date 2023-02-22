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
    <Card.Content style={{backgroundColor: '#bad9ed'}}>
      <Text style={{fontFamily: 'Palatino', fontSize: 22, fontWeight: 'bold'}} variant="titleLarge">{event.name}</Text>
      <Text style={{fontFamily: 'Palatino', fontSize: 20}} variant="bodyMedium">{dateRU}</Text>
      <Text variant="bodyMedium">{event.comment}</Text>
    </Card.Content>
    <Card.Actions style={{backgroundColor: 'white'}}>
      <Button  textColor='#4587b4' onPress={() => {dispatch(deleteEventThunk(event.id))}}>Удалить</Button>
      <Button buttonColor='#4587b4' onPress={() => navigation.navigate("SexPage")}>Выбрать подарок</Button>
    </Card.Actions>
  </Card>
  );
}