import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextCustom = (props)=>{
    return <Text {...props} style={{...styles.text, ...props.style}} >{props.children}</Text>
};

const styles= StyleSheet.create({
    text :{
        fontSize: 16,
    }
});

export default TextCustom;