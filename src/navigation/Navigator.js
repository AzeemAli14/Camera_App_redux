import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageScreen from '../screens/ImageScreen';

const Navigation = createNativeStackNavigator();

export class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigation.Navigator initialRouteName='Home'>
            <Navigation.Screen name='Home' component={ImageScreen} options={{statusBarColor: 'orange', headerShown: false}}/>
        </Navigation.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigator