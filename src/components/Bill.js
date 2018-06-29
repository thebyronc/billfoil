import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  ToastAndroid,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import Styles from '../styles/styles';
import Person from '../models/Person';
import Colors from '../constants/Colors';



export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: ''};
  }

  handleClick = () => {
    var person = [{name: this.state.name, email: this.state.email, userTotal: parseFloat(0).toFixed(2), numItems: 0}];
    var testData = [{name: "testdata String"}];
    this.props.updatePeopleList(...person);
  }

  render() {
    return (
      <View style={{height: 200}}>
        <TextInput
          style={Styles.textInput}
          autoCorrect={false}
          placeholder="Name"
          autoCapitalize= "words"
          underlineColorAndroid='transparent'
          placeholderTextColor={Colors.placeHolderTextColor}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />

        <TextInput
          style={Styles.textInput}
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid='transparent'
          placeholderTextColor={Colors.placeHolderTextColor}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TouchableOpacity onPress={this.handleClick}>
          <View style={Styles.ctaButton}>
            <Text style={Styles.ctaText}>ADD PERSON</Text>
          </View>
        </TouchableOpacity>

        {/* <Text style={Styles.bodyText}>
          Test Data goes here: {JSON.stringify(this.props.testData)} {this.props.testData}
        </Text> */}
      </View>
    );
  }
}
