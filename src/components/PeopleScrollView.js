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
    this.state = { 
      peopleList: [],
      refreshing: false,
    };
  }
  userTotal(id) {
    let foundId = this.props.peopleList.findIndex(person => person.id === id);
    let totalCost = 0;
    if( 0 == this.props.itemList.length ) {
    } else {
      for(let i = 0; i < this.props.itemList.length; i++) {
        if (id == this.props.itemList[i].assignedUser) {
          totalCost += parseFloat(this.props.itemList[i].itemCost);
        }
      }
    }
    
    return totalCost;
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    return (
      <View style={{flex: 2}}>
        <ScrollView style={Styles.container} >
          <FlatList
            data={this.props.peopleList}
            extraData={this.props.peopleList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={Styles.viewList } > 
                <Text style={Styles.textList}>{item.name} | {item.email}</Text>
                <Text style={Styles.textNumber}>${this.userTotal(item.id)}</Text>
              </View>
            )}
          /> 
        </ScrollView>
      </View>
    );
  }
}
