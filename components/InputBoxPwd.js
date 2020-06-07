import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions} from 'react-native';
import Colors from '../constants/Colors';

WIDTH = Dimensions.get('window').width;
const InputBoxPwd = props=> {

    return (
      <View>
          <Text style={{ ...styles.label, ...props.style }}>{props.text}</Text>
          <TextInput 
            style={{ ...styles.inputBox, ...props.styleInput}}
            onChangeText={props.onChangeText}
            value={props.value}
            secureTextEntry={props.secureEntry}
            {...props}
          />
      </View>
    );
  };
  
const styles = StyleSheet.create({
  inputBox: {
    // width: WIDTH * 0.83,
    paddingLeft: 12,
    color: Colors.accent,
  },
  label: {
    color: Colors.accent,
    fontWeight: 'bold'
  }


});
  
  export default InputBoxPwd;