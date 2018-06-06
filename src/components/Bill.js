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



export default class Bill extends Component {
  render() {
    return (
        <View style={Styles.container}>
            <Text style={Styles.bodyText}>Test</Text>
            {/* <TextInput
              style={Styles.textInput}
              placeholder="Name"
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            /> */}

            {/* <TextInput
              style={Styles.textInput}
              placeholder="Email"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            <TouchableOpacity onPress={this.addPersonButton}>
              <View style={Styles.ctaButton}>
                <Text style={Styles.ctaText}>ADD PERSON</Text>
              </View>
            </TouchableOpacity> */}
            {/* <ScrollView style={Styles.container}>
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
