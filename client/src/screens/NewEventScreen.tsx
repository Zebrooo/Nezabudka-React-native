import { Formik } from "formik";
import React, { useState } from "react";
import { DatePickerIOS, DatePickerIOSBase, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import DateField from "react-native-datefield";
import RNDateTimePicker from '@react-native-community/datetimepicker';
import styles from "../styles/stylesall";
import { useAppDispatch } from "../Redux/hooks";

export default function NewEventScreen({ navigation }) {
  const date = new Date()
  const [chosenDate, setChosenDate] = useState(date);
  console.log(setChosenDate);
  const dispatch = useAppDispatch();

  const [input, setInput] = useState({
    name: "", date: "", comment: ""
  });
  console.log(input);
  
  return (
    <View style={styles.main}>
      <Formik
        initialValues={{ name: "", date: "", comment: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View style={{ marginTop: "40%", marginLeft: "17%" }}>
            <Text style={styles.text}>Введите название события</Text>
            <TextInput
              style={styles.input}
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            ></TextInput>
            <Text style={styles.text}>Выберите дату</Text>
            {/* <RNDateTimePicker mode="date" /> */}
            <TextInputMask
              placeholder="ГГГГ-ММ-ДД"
              type={"datetime"}
              options={{
                format: "YYYY-MM-DD",
              }}
              style={styles.input}
              value={props.values.date}
              onChangeText={props.handleChange("date")}
            />
              {/* <DatePickerIOS mode='date' date={chosenDate} onDateChange={setChosenDate} /> */}
            {/* <DateField onSubmit={(value) => console.log(value)} />

            <DateField
              defaultValue={new Date()}
              styleInput={{ fontSize: 15 }}
              containerStyle={{ marginVertical: 20 }}
            /> */}
            
            {/* <TextInput */}
            {/* dataDetectorTypes={'calendarEvent'} */}

            {/* keyboardType="numeric" */}
            {/* style={styles.input} */}
            {/* onChangeText={props.handleChange("date")} */}
            {/* value={props.values.date} */}
            {/* ></TextInput> */}
            <Text style={styles.text}>увлечения человека</Text>
            <TextInput
              style={styles.input}
              multiline={true}
              onChangeText={props.handleChange("comment")}
              value={props.values.comment}
            ></TextInput>
            <TouchableOpacity
              style={styles.botton}
              onPress={() => navigation.navigate("MainPage")}
            >
              <Text style={styles.text}>Добавить</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
