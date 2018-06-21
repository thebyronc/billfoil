
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
import TestScreen from './screens/TestScreen';
import RootNavigation from './navigation/RootNavigation';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      name: '', 
      email: '', 
      peopleList: [], 
      testData: 'TestData Passed!'};
  }

  updatePeopleList = (passedData) => {
    this.setState({
      peopleList: [...this.state.peopleList, passedData]
    });
    let arrayToPrint = [];
    for(let i = 0; i < this.state.peopleList.length; i++) {
      arrayToPrint.push(this.state.peopleList[i].name);
      
    }
    ToastAndroid.showWithGravity(
      "Size of PeopleList Array: " + arrayToPrint,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );

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
        <RootNavigation screenProps={this.state.testData}
        peopleList={this.state.peopleList}
        updatePeopleList={this.updatePeopleList} />
      </View>
    );
  }
}
