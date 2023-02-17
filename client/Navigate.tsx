import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainPage from './src/screens/MainPage';
import NewEventScreen from './src/screens/NewEventScreen';

const homeName = 'Home';
const newEventName = 'New Event';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === newEventName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={newEventName} component={NewEventScreen} />
        <Tab.Screen name={homeName} component={MainPage} />
        {/* <Tab.Screen name="Registration" component={SignUpScreen} /> */}
        {/* <Tab.Screen name="Login" component={LoginScreen} /> */}
        {/* <Tab.Screen name="NewShop" component={NewShopPage} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
