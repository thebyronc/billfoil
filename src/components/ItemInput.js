import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  KeyboardAvoidingView,
} from 'react-native';
import Styles from '../styles/styles';
import Colors from '../constants/Colors';

export default class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      itemName: '', 
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
      return <Picker.Item key={i} value={s.id} label={s.name} />
    });

    return (
      <View style={{height: 200}}>
        <KeyboardAvoidingView 
        behavior="position" 
        keyboardVerticalOffset={200}
        enabled>
        <TextInput
          style={Styles.textInput}
          placeholder="Item Name"
          placeholderTextColor={Colors.placeHolderTextColor}
          underlineColorAndroid='transparent'
          onChangeText={(itemName) => this.setState({itemName})}
          value={this.state.itemName}
        />
        <View style={{ flexDirection: 'row'}}>
          <View style={{ flex: 1,}}>
            <TextInput
            style={Styles.textInput}
            placeholder="Item Cost"
            placeholderTextColor={Colors.placeHolderTextColor}
            keyboardType="numeric"
            underlineColorAndroid='transparent'
            onChangeText={(itemCost) => this.setState({itemCost})}
            value={this.state.itemCost}
            />
          </View>
          <View style={{flex: 1}}>
            <Picker
            selectedValue={this.state.assignedUser}
            style={Styles.pickerBox}
            onValueChange={(itemValue, itemIndex) => this.setState({assignedUser: itemValue})}>
              {userList}
           </Picker>
          </View>

        </View>
        
        
        <TouchableOpacity onPress={this.handleClick}>
          <View style={Styles.ctaButton}>
            <Text style={Styles.ctaText}>ADD ITEM</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
