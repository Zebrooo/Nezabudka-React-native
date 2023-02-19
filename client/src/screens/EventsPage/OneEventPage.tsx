import React from "react";
// import { Text, View } from "react-native";
import { Button, Card, Text } from 'react-native-paper';
import { useAppSelector } from "../../Redux/hooks";
import type { Event } from '../../Redux/eventSlice/EventType';

type OneEventPageProps = {
    event: Event;
  };

export default function OneEventPage({event}: OneEventPageProps) {
  return (
    <Card>
    <Card.Content>
      <Text variant="titleLarge">{event.name}</Text>
      <Text variant="bodyMedium">{event.comment}</Text>
      <Text variant="bodyMedium">{event.date}</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Удалить</Button>
      <Button>Подарок</Button>
    </Card.Actions>
  </Card>
  );
}