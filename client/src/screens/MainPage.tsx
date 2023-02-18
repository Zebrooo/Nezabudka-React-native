import React from 'react'
import { Text, View } from 'react-native'
import Calendarik from '../components/Calendarik'
import styles from '../styles/stylesall'

export default function MainPage() {
  return (
    <View style={styles.main}>
        <Calendarik/>
      <View style={{ marginTop: "10%", marginLeft: "17%"}}>
        <Text style={styles.text}>ближайший список событий</Text>
        </View>
    </View>
  )
}
