
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Styles from '../styles/styles';
import Bill from '../components/Bill';
import ItemInput from '../components/ItemInput';
import PeopleScrollView from '../components/PeopleScrollView';
import ItemScrollView from '../components/ItemScrollView';


export default class ItemScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', peopleList: []};
  }

  render() {
    return (
      <View style={Styles.container}>
        <ItemInput
          updateItemList={this.props.screenProps.updateItemList}
          peopleList={this.props.screenProps.state.peopleList} 
        />
        <ItemScrollView
          itemList={this.props.screenProps.state.itemList} 
        />
      </View>
    );
  }
}
