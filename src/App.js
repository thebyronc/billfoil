
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Styles from './styles/styles';
import Bill from './components/Bill';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', peopleList: []};
  }

  updatePeopleList = () => {
    this.setState({
      peopleList: [...this.state.peopleList, "test"]
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.headerText}>
          BILL FOIL
        </Text>
        <Bill />
      </View>
    );
  }
}
