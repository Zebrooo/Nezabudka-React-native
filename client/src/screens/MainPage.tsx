import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Calendarik from '../components/Calendarik'
import { visualEventsThunk } from '../Redux/eventSlice/EventSlice'
import { useAppDispatch } from '../Redux/hooks'
import styles from '../styles/stylesall'
import AllEventsPage from './EventsPage/AllEventsPage'

export default function MainPage() {
  
  return (
    <ScrollView style={styles.main}>
        <Calendarik/>
      <View style={{ marginTop: "10%", marginLeft: "17%"}}>
        <Text style={styles.text}>ближайший список событий</Text>
        </View>
        <AllEventsPage />
    </ScrollView>
  )
}
