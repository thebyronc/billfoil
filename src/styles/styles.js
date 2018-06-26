import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

let itemHorizontalMargin = 15;
let itemVerticalMargin = 10;

let Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  containerWrap: {
    flex: 1,
  },
  testColor: {
    color: Colors.tintColor,
  },
  headerText: {
    color: Colors.tintColor,
    fontSize: 32,
    marginHorizontal: itemHorizontalMargin,
    marginVertical: itemVerticalMargin,
  },
  bodyText: {
    color: '#FFFFFF',
    marginHorizontal: itemHorizontalMargin,
    marginVertical: itemVerticalMargin,
  },
  ctaButton: {
    marginHorizontal: itemHorizontalMargin,
    marginVertical: itemVerticalMargin,
    backgroundColor: Colors.tintColor,
    alignItems: 'center',
    padding: 8,
  },
  ctaText: {
    color: '#F2F2F2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    height: 50,
    marginHorizontal: itemHorizontalMargin,
    marginVertical: itemVerticalMargin,
    padding: 8,
    backgroundColor:'#333333',
    borderWidth: 0,
    color: '#FFFFFF',
    fontSize: 18,
    
  },
  pickerBox: {
    alignSelf: 'stretch',
    height: 50,
    marginHorizontal: itemHorizontalMargin,
    marginVertical: itemVerticalMargin,
    padding: 8,
    borderColor: '#F2F2F2',
    backgroundColor:'#333333',
    borderWidth: 1,
    color: '#FFFFFF',
  },
  viewList: {
    backgroundColor: '#333333',
    borderColor: '#525252',
    borderTopWidth: 1,
    padding: 15,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textList: {
    color: '#FFFFFF',
  },
  textNumber: {
    color: '#F2F2F2',
  },
  contentContainer: {
    paddingTop: 30,
  },

});

export default Styles;
