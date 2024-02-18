import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./screens/Home"
import D3 from "./screens/d3"
import D2 from "./screens/d2"

const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen name = "Home" component ={HomeScreen} />
    <Stack.Screen name = "D3" component = {D3} />
    <Stack.Screen name  = "D2" component = {D2} />
    </Stack.Navigator>
</NavigationContainer>
 
  );
}