
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid
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
  obj = 'testObjString';
  updatePeopleList = (passedData) => {
    this.setState({
      peopleList: [...this.state.peopleList, passedData]
    });
    let arrayToPrint = [];
    for(let i = 0; i < this.state.peopleList.length; i++) {
      arrayToPrint.push(this.state.peopleList[i].name);
    }
    // ToastAndroid.showWithGravity(
    //   "Size of PeopleList Array: " + arrayToPrint,
    //   ToastAndroid.SHORT,
    //   ToastAndroid.BOTTOM
    // );

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
    // ToastAndroid.showWithGravity(
    //   "Size of PeopleList Array: " + arrayToPrint,
    //   ToastAndroid.SHORT,
    //   ToastAndroid.BOTTOM
    // );

    this.setState({
      testData: arrayToPrint
    });
  }

  render() {
    return (
      <View style={Styles.container}>
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
