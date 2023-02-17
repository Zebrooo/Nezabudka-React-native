import React, { useState } from 'react';

import { Text, View } from 'react-native';
import  Calendar  from 'react-native-calendars/src/calendar';

export default function Calendarik():JSX.Element {
  return (
      <View>
         <Calendar  />
        <Text>
          Календарь
        </Text>
      </View>

  );
}
