
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';
import {
    createMaterialTopTabNavigator,
} from 'react-navigation';
import Colors from '../constants/Colors';
import FoilScreen from '../screens/FoilScreen';
import PeopleScreen from '../screens/PeopleScreen';
import ItemScreen from '../screens/ItemScreen';


export default createMaterialTopTabNavigator(
  {
    Foil: FoilScreen,
    People: PeopleScreen,
    Bill: ItemScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Foil') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'People') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Bill') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      inactiveBackgroundColor: '#757AD1',
      activeBackgroundColor: '#757AD1',
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ffffff',
      tintColor: '#fff',
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
      fontWeight: 'bolder',
      indicatorStyle: {
        borderBottomColor: Colors.tintColor,
        borderBottomWidth: 2,
      },
      style: {
        backgroundColor: '#292929',
      },
    },
  }

);