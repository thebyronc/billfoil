
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
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  firebaseDB = firebase.initializeApp({
    apiKey: "AIzaSyBNJ9zZBDuZK089PXTXRj4OyKv9hFCFZLc",
    authDomain: "billfoil-a22de.firebaseapp.com",
    databaseURL: "https://billfoil-a22de.firebaseio.com",
    projectId: "billfoil-a22de",
    storageBucket: "billfoil-a22de.appspot.com",
    messagingSenderId: "564198582002"
  });

  peopleRef = this.firebaseDB.database().ref('people');
  itemRef = this.firebaseDB.database().ref('item');
  componentDidMount() {
    
    // let parsedData = peopleRef.once('value')
    // .then(function(snapshot){
    //   console.log('testResponse 101:' + JSON.stringify(snapshot));
    //   let peopleArray = [];
    //   for (let key in snapshot) {
        
    //   }
    //   this.setState({
    //     peopleList: ["12"]
    //   });
    // });

    this.peopleRef.on('value', (snapshot) => {
      let peoples = snapshot.val();
      let newState = [];
      for(let people in peoples) {
        newState.push({
          id: people,
          name: peoples[people].name,
          email: peoples[people].email,
          numItems: peoples[people].numItems,
          userTotal: peoples[people].userTotal
        });
      }
      this.setState({
        peopleList: newState
      });
    });

    this.itemRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for(let item in items) {
        newState.push({
          id: item,
          itemName: items[item].itemName, 
          itemCost: items[item].itemCost,
          assignedUser: items[item].assignedUser
        });
      }
      this.setState({
        itemList: newState
      });
    });
    
    
  }

  updatePeopleList = (passedData) => {
    ToastAndroid.showWithGravity(
      passedData.name + " Added",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
    this.peopleRef.push(
      {...passedData}
    );
  }
  
  removePeople(personId) {
    
  }

  updateItemList = (passedData) => {
    this.itemRef.push(
      {...passedData}
    );

    this.setState({
      itemList: [...this.state.itemList, passedData]
    });

    let arrayToPrint = [];
    for(let i = 0; i < this.state.itemList.length; i++) {
      arrayToPrint.push(this.state.itemList[i].name);
    }
    // this.addItemToPeople(passedData);
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
      newPeopleList[foundId].userTotal = parseFloat(newPeopleList[foundId].userTotal).toFixed(2) + parseFloat(passedData.itemCost).toFixed(2);
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
      <View style={Styles.container}>
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
