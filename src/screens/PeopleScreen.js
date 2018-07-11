
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Styles from '../styles/styles';
import Bill from '../components/Bill';
import PeopleScrollView from '../components/PeopleScrollView';

export default class PeopleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', peopleList: [] };
  }

  render() {
    return (
      <View style={Styles.container}>
        <PeopleScrollView
          peopleList={this.props.screenProps.state.peopleList}
          itemList={this.props.screenProps.state.itemList} />
        <Bill testData={this.props.screenProps.obj}
          peopleList={this.props.peopleList}

          updatePeopleList={this.props.screenProps.updatePeopleList} />
      </View>
    );
  }
}
