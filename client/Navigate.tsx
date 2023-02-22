import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainPage from './src/screens/MainPage';
import NewEventScreen from './src/screens/NewEventScreen';
import ProfilePage from './src/screens/ProfilePage/ProfilePage';
import SexPage from './src/screens/SexPage/SexPage';
import ManPage from './src/screens/ManPage/ManPage';
import WomenPage from './src/screens/WomenPage/WomenPage';
import NewShopPage from './src/screens/NewShopPage';
import { useAuth } from './src/Redux/fireStormSlice/userFiresotrmsliceReducer';
import CommentPage from './src/screens/CommentPage/CommentPage';
import ShopsByCategory from './src/screens/ShopsByCategory/ShopsByCategory';
import PhotoProfilePage from './src/screens/ProfilePage/PhotoProfilePAge';
import NewProductPage from './src/screens/NewProductPage/NewProductPage';
import ProductsPage from './src/screens/ProductsPage/ProductsPage';
import AllComments from "./src/screens/CommentPage/AllComments";

const homeName = "Home";
const newEventName = "New Event";
const profileName = "Profile";
const giftName = "Gifts";
// const isAuth = true

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  const { isAuth } = useAuth();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (rn === newEventName) {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (rn === giftName) {
              iconName = focused ? "gift" : "gift-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (rn === profileName) {
              iconName = focused ? "user-circle" : "user-circle-o";
              return <FontAwesome name={iconName} size={size} color={color} />;
            }
          },
        })}
      >
        {isAuth ? (
          <>
            <Tab.Screen name={homeName} component={HomeNavigator} />
            <Tab.Screen name={newEventName} component={NewEventNavigator} />
            <Tab.Screen name={giftName} component={GiftNavigator} />
            <Tab.Screen name={profileName} component={ProfileNavigator} />
          </>
        ) : (
          <Tab.Screen
            name="Auth"
            component={SignInNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        component={MainPage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SexPage"
        component={SexPage}
        options={{ headerShown: false }}
      />
      <GiftStack.Screen
        name="ManPage"
        component={ManPage}
        options={{ headerShown: false }}
      />
      <GiftStack.Screen
        name="WomenPage"
        component={WomenPage}
        options={{ headerShown: false }}
      />
      <GiftStack.Screen
        name="AllComments"
        component={AllComments}
        options={{ headerShown: false }}
      />
      <GiftStack.Screen
        name="ShopsByCategory"
        component={ShopsByCategory}
        options={{ headerShown: false }}
      />
       <GiftStack.Screen
        name="ProductsPage"
        component={ProductsPage}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const NewEventStack = createStackNavigator();

function NewEventNavigator() {
  return (
    <NewEventStack.Navigator initialRouteName="NewEventScreen">
      <NewEventStack.Screen
        name="NewEventScreen"
        component={NewEventScreen}
        options={{ headerShown: false }}
      />
    </NewEventStack.Navigator>
  );
}

const GiftStack = createStackNavigator();

function GiftNavigator() {
  return (
    <GiftStack.Navigator initialRouteName="SexPage">
      <GiftStack.Screen
        name="SexPage"
        component={SexPage}
        options={{ headerShown: false }}
      />
      <GiftStack.Screen
        name="ManPage"
        component={ManPage}
        options={{ headerShown: false }}
      />
      <GiftStack.Screen
        name="WomenPage"
        component={WomenPage}
        options={{ headerShown: false }}
      />
      <GiftStack.Screen
        name="AllComments"
        component={AllComments}
        options={{ headerShown: false }}
      />
      <GiftStack.Screen
        name="ShopsByCategory"
        component={ShopsByCategory}
        options={{ headerShown: false }}
      />
       <GiftStack.Screen
        name="ProductsPage"
        component={ProductsPage}
        options={{ headerShown: false }}
      />
    </GiftStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator initialRouteName="ProfilePage">
      <ProfileStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="NewShopPage"
        component={NewShopPage}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="PhotoProfilePage"
        component={PhotoProfilePage}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="NewProductPage"
        component={NewProductPage}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}

const SignInStack = createStackNavigator();

function SignInNavigator() {
  return (
    <SignInStack.Navigator initialRouteName="SignInScreen">
      <SignInStack.Screen
        name="SignInScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <SignInStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </SignInStack.Navigator>
  );
}
