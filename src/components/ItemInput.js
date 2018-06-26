import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';
import Styles from '../styles/styles';
import Colors from '../constants/Colors';

export default class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: '', 
    itemCost: '',
    assignedUser: '',};
  }

  handleClick = () => {
    var item = [{
        itemName: this.state.itemName,
        itemCost: this.state.itemCost,
        assignedUser: this.state.assignedUser,
    }];
    this.props.updateItemList(...item);
  }

  render() {
    let userList = this.props.peopleList.map( (s, i) => {
        return <Picker.Item key={i} value={s.id} label={s.id + ': ' + s.name} />
    });

    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.textInput}
          placeholder="Item Name"
          placeholderTextColor={Colors.placeHolderTextColor}
          underlineColorAndroid='transparent'
          onChangeText={(itemName) => this.setState({itemName})}
          value={this.state.itemName}
        />

        <TextInput
          style={Styles.textInput}
          placeholder="Item Cost"
          placeholderTextColor={Colors.placeHolderTextColor}
          keyboardType="numeric"
          underlineColorAndroid='transparent'
          onChangeText={(itemCost) => this.setState({itemCost})}
          value={this.state.itemCost}
        />
        <Picker
          selectedValue={this.state.assignedUser}
          style={Styles.pickerBox}
          onValueChange={(itemValue, itemIndex) => this.setState({assignedUser: itemValue})}>
            {userList}
        </Picker>
        <TouchableOpacity onPress={this.handleClick}>
          <View style={Styles.ctaButton}>
            <Text style={Styles.ctaText}>ADD ITEM</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
