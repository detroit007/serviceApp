import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

WIDTH = Dimensions.get('window').width;
const ButtonBox = props=> {

    return (
      <View>
          <TouchableOpacity 
            activeOpacity={0.9} 
            style={{ ...styles.buttonBox, ...props.style}} 
            onPress={props.onPress}
          >

            <Text style={{ ...styles.label, ...props.styleText}}>{props.text}</Text>
            {props.children}
            
          </TouchableOpacity>
          
      </View>
    );
  };
  
const styles = StyleSheet.create({
  buttonBox: {
    width: WIDTH * 0.83,
    height: 55,
    color: Colors.colorAccent,
    // backgroundColor: Colors.colorAccent,
    justifyContent: 'center',
    borderRadius: 20
  },
  label: {
    // color: Colors.colorPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
  }


});
  
  export default ButtonBox;