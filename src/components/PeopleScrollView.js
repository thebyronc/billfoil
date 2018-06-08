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



export default class PeopleScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: ''};
  }


  render() {
    return (
        <View style={Styles.container}>
            <Text style={Styles.bodyText}>People Scroll View</Text>
            
            <ScrollView style={Styles.container}>
                <FlatList
                data={this.props.peopleList}
                extraData={this.props.peopleList}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <View style={Styles.viewList}>
                    <Text style={Styles.textList}>{item.name} | {item.email}</Text>
                    </View>
                )}
                /> 
            </ScrollView>
        </View>
    );
  }
}