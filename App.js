/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import TabNavigation from './components/tabNavigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './components/firstPage';

const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
        headerStyle: {
          backgroundColor: '#633689',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Details" component={FirstPage} options={({ route }) => ({ title: route.params.title })}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;
