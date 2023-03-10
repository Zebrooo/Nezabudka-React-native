import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainPage from './src/screens/MainPage';
import NewEventScreen from './src/screens/NewEventScreen';
import SexPage from './src/screens/SexPage/SexPage';
import WomenPage from './src/screens/WomenPage/WomenPage';
import MainContainer from './Navigate';

export default function App() {
  return (
    <MainContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
