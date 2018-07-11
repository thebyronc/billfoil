
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Styles from '../styles/styles';


export default class FoilScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.headerText}>
          FOIL
        </Text>
      </View>
    );
  }
}
