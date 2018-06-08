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
  AsyncStorage
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
    var person = [{name: this.state.name, email: this.state.email}];
    var testData = [{name: "testdata String"}];
    this.props.updatePeopleList(...person);
  }

  render() {
    return (
        <View style={Styles.container}>
            <TextInput
              style={Styles.textInput}
              placeholder="Name"
              placeholderTextColor={Colors.placeHolderTextColor}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />

            <TextInput
              style={Styles.textInput}
              placeholder="Email"
              placeholderTextColor={Colors.placeHolderTextColor}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            <TouchableOpacity onPress={this.handleClick}>
              <View style={Styles.ctaButton}>
                <Text style={Styles.ctaText}>ADD PERSON</Text>
              </View>
            </TouchableOpacity>
            
            {/* <TextInput
              style={Styles.textInput}
              placeholder="Name"
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />

            <TextInput
              style={Styles.textInput}
              placeholder="Email"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            <TouchableOpacity onPress={this.addPersonButton}>
              <View style={Styles.ctaButton}>
                <Text style={Styles.ctaText}>ADD PERSON</Text>
              </View>
            </TouchableOpacity>
            <ScrollView style={Styles.container}>
                <FlatList
                data={this.state.peopleList}
                extraData={this.state.peopleList}
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => (
                    <View style={Styles.viewList}>
                    <Text style={Styles.textList}>{item.getName()} | {item.getEmail()}</Text>
                    </View>
                )}
                /> 
            </ScrollView> */}
        </View>
    );
  }
}
