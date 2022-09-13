import React from 'react';
import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "./src/screens/HomePage";
import DetailsPage from './src/screens/DetailsPage'


const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='TvMaze'
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'black'
          }
        }}
      >
        <Tab.Screen name='Home' component={HomePage} options={{ headerShown: false, tabBarIcon: () => (<Image source={require("./image/Home.png")} style={{width:30, height:30}}/>)}} />
        <Tab.Screen name='Details' component={DetailsPage} options={{ headerShown: false, tabBarStyle: {display:'none'}, tabBarButton: () => null }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;
