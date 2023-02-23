import { useNavigationState } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Calendar from "react-native-calendars/src/calendar";
import AgendaScreen from "../components/AgendaScreen";
import Calendarik from "../components/Calendarik";
import MyComponent from "../components/ModalScreen";
import { visualEventsThunk } from "../Redux/eventSlice/EventSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { loadCategories } from "../Redux/ShopSlice/ShopSlice";
import { findUserAction } from "../Redux/UserSlice/UserSliceReducer";
import styles from "../styles/stylesall";
import AllEventsPage from "./EventsPage/AllEventsPage";

export default function MainPage() {
  const [month, setMonth] = useState({month: new Date().getMonth() + 1})
  const [ modal, showModal] = useState(false)
  const dispatch = useAppDispatch();
  const event = useAppSelector((store) => store?.events?.oneEvent)

  const options = { month: "long", day: "numeric", year: "numeric" };
  const dateRU = new Date(event.date).toLocaleDateString("ru-US", options)

  useEffect(() => {
    dispatch(visualEventsThunk());
    dispatch(loadCategories());
  }, []);
  
  return (
    <ScrollView style={styles.main}>
      {/* <AgendaScreen /> */}
      <Calendarik setMonth={setMonth} showModal={showModal}
      />
      <View style={style.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          showModal((prev)=> !prev);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>{event.name}</Text>
            <Text style={style.modalText}>{dateRU}</Text>
            {event.comment && 
            
            <Text style={style.modalText}>{event.comment}</Text>
            }
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() =>  showModal((prev)=> !prev)}>
              <Text style={style.textStyle}>Закрыть</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[style.button, style.buttonOpen]}
        onPress={() =>  showModal((prev)=> !prev)}>
        <Text style={style.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
      <View style={{ marginTop: "10%", marginLeft: "17%" }}>
        <Text style={styles.text}>ближайший список событий</Text>
      </View>
      <AllEventsPage month={month} />
    </ScrollView>
  );
}
const style = StyleSheet.create
({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#4587b4',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});