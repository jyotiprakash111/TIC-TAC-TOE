import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/Home';
import FollwScreen from './screens/Follow';

const MainNavigator = createStackNavigator({
  Home: {screen : HomeScreen},
  Follow: {screen : FollwScreen}
},{
  defaultNavigationOptions: {
    headerTintColor:'#fff',
    headerStyle:{
      backgroundColor: "#BA2F16"
    },
    headerTitleStyle:{
      color:'#fff'
    }
  }
});


const App  = createAppContainer(MainNavigator);
export default App;

