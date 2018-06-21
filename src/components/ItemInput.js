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



export default class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: '', itemCost: ''};
  }

  handleClick = () => {
    var item = [{
        itemName: this.state.itemName,
        itemCost: this.state.itemCost,
        assignedUser: '',
    }];
    var testData = [{name: "testdata String"}];
    this.props.updateItemList(...item);
  }

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.textInput}
          placeholder="Item Name"
          placeholderTextColor={Colors.placeHolderTextColor}
          onChangeText={(itemName) => this.setState({itemName})}
          value={this.state.itemName}
        />

        <TextInput
          style={Styles.textInput}
          placeholder="Item Cost"
          placeholderTextColor={Colors.placeHolderTextColor}
          onChangeText={(itemCost) => this.setState({itemCost})}
          value={this.state.itemCost}
        />
        <TouchableOpacity onPress={this.handleClick}>
          <View style={Styles.ctaButton}>
            <Text style={Styles.ctaText}>ADD ITEM</Text>
          </View>
        </TouchableOpacity>

        {/* <Text style={Styles.bodyText}>
          Test Data goes here: {JSON.stringify(this.props.testData)} {this.props.testData}
        </Text> */}
      </View>
    );
  }
}
