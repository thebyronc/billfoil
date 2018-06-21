
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
import PeopleScreen from '../screens/PeopleScreen';
import TestScreen from '../screens/TestScreen';

export default createMaterialTopTabNavigator(
    {
      People: PeopleScreen,
      Bill: TestScreen,
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'People') {
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