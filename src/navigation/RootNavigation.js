
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';
import {
  createBottomTabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/styles';
import PeopleScreen from '../screens/PeopleScreen';
import TestScreen from '../screens/TestScreen';

export default createBottomTabNavigator(
    {
      People: PeopleScreen,
      Test: TestScreen,
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );