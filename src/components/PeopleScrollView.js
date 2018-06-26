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



export default class PeopleScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: ''};
  }


  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.container} >
          <FlatList
          data={this.props.peopleList}
          extraData={this.props.peopleList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={Styles.viewList } > 
              <Text style={Styles.textList}>{item.id}: {item.name} | {item.email}</Text>
              <Text style={Styles.textNumber}>${item.userTotal} | {item.numItems}</Text>
            </View>
          )}
          /> 
        </ScrollView>
      </View>
    );
  }
}
