import React from 'react'
import { Text, View } from 'react-native'
import Calendarik from '../components/Calendarik'

export default function MainPage() {
  return (
    <View>
        <Calendarik/>
        <Text>ближайший список событий</Text>
    </View>
  )
}
