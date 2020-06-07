import React from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions} from 'react-native';
import Colors from '../constants/Colors';

WIDTH = Dimensions.get('window').width;
const InputBox = props => {

    return (
      <View>
          <Text style={{ ...styles.label, ...props.style }}>{props.text}</Text>
          <TextInput 
            style={{ ...styles.inputBox, ...props.styleInput}}
            onChangeText={props.onChangeText}
            value={props.value}
            {...props}
          />
      </View>
    );
  };
  
const styles = StyleSheet.create({
  inputBox: {
    width: WIDTH * 0.83,
    borderColor: 'red',
    borderWidth: 1,
    paddingLeft: 12,
  },
  label: {
    fontWeight: 'bold'
  }


});
  
  export default InputBox;