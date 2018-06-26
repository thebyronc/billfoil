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



export default class ItemScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: ''};
  }
  userName(id) {
    let foundId = this.props.peopleList.findIndex(person => person.id === id);
    return this.props.peopleList[foundId].name;
  }

  
  render() {
    
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.container} >
          <FlatList
          data={this.props.itemList}
          extraData={this.props.itemList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={Styles.viewList } > 
              <Text style={Styles.textList}>{item.itemName} | {this.userName(item.assignedUser)} </Text>
              <Text style={Styles.textNumber}>${item.itemCost}</Text>
            </View>
          )}
          /> 
        </ScrollView>
      </View>
    );
  }
}
