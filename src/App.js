
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import Styles from './styles/styles';
import Bill from './components/Bill';
import PeopleScrollView from './components/PeopleScrollView';
import PeopleScreen from './screens/PeopleScreen';
import TestScreen from './screens/ItemScreen';
import RootNavigation from './navigation/RootNavigation';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      name: '', 
      email: '', 
      peopleList: [],
      itemList: [], 
      testData: 'TestData Passed!'};
  }
  firebaseDB = firebase.initializeApp({
      apiKey: "AIzaSyBNJ9zZBDuZK089PXTXRj4OyKv9hFCFZLc",
      authDomain: "billfoil-a22de.firebaseapp.com",
      databaseURL: "https://billfoil-a22de.firebaseio.com",
      projectId: "billfoil-a22de",
      storageBucket: "billfoil-a22de.appspot.com",
      messagingSenderId: "564198582002"
  });




  updatePeopleList = (passedData) => {
    passedData.id = this.state.peopleList.length;
    this.setState({
      peopleList: [...this.state.peopleList, passedData]
    });
    let arrayToPrint = [];
    for(let i = 0; i < this.state.peopleList.length; i++) {
      arrayToPrint.push(this.state.peopleList[i].name);
    }
    ToastAndroid.showWithGravity(
      passedData.name + " Added",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
    firebaseDB.database().push(
      {test: 'test'}
    );

    this.setState({
      testData: arrayToPrint
    });
  }

  updateItemList = (passedData) => {
    this.setState({
      itemList: [...this.state.itemList, passedData]
    });
    let arrayToPrint = [];
    for(let i = 0; i < this.state.itemList.length; i++) {
      arrayToPrint.push(this.state.itemList[i].name);
    }
    this.addItemToPeople(passedData);
  }

  addItemToPeople = (passedData) => {
    if(this.state.peopleList.length < 1) {
      let newPeopleList = this.state.peopleList;
      ToastAndroid.showWithGravity(
        "Less than 1: " + this.state.peopleList.length,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    } else if (this.state.peopleList.length >= 1) {
      newPeopleList = this.state.peopleList.slice();
      let foundId = newPeopleList.findIndex(person => person.id === passedData.assignedUser);
      newPeopleList[foundId].userTotal = parseFloat(newPeopleList[foundId].userTotal) + parseFloat(passedData.itemCost);
      this.setState({
        peopleList: [...newPeopleList]
      });

      ToastAndroid.showWithGravity(
        "Found User total: " + foundId,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }

    
  }

  render() {
    return (
      <View 
        style={Styles.container}
      >
        {/* <Text style={Styles.headerText}>
          BILL FOIL {this.state.peopleList.length}
        </Text>
        <PeopleScreen testData={this.state.testData}
        peopleList={this.state.peopleList}
        updatePeopleList={this.updatePeopleList}
        peopleList={this.state.peopleList} /> */}
        <RootNavigation 
          screenProps={{state: this.state, 
          updatePeopleList: this.updatePeopleList,
          updateItemList: this.updateItemList,
          obj: this.obj,}}
          peopleList={this.state.peopleList}
        />
      </View>
    );
  }
}
