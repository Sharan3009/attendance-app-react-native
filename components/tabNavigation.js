import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import {createAppContainer} from 'react-navigation';
// import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from './firstPage';
import SecondPage from './secondPage';

const Tab = createMaterialTopTabNavigator();

function myTabs() {
  return (
    <NavigationContainer independent="true">
      <Tab.Navigator
        tabBarOptions={{
          style:{
            backgroundColor: "#633689",
          },
          activeTintColor:"#fff"
        }}>
        <Tab.Screen name="Today" component={FirstPage} />
        <Tab.Screen name="History" component={SecondPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default myTabs;