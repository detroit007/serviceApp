import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import TextCustom from './TextCustom';
import CacheImage from './CacheImage';

const ServiceBox =(props) =>{
    return(
        <TouchableOpacity style={{...styles.btn, ...props.boxstyle}} activeOpacity={0.6} onPress={props.onPress}>
            <View style={{...styles.count, ...props.countStyle}} ><Text>{props.count}</Text></View>
            <Image style={{width: 30, height:40, marginBottom: 5,...props.style}} source={props.source} />
            <TextCustom numberOfLines={2} style={{textAlign: 'center',paddingBottom: 5, color: Colors.primary, ...props.textstyle}} >{props.title}</TextCustom>
            {props.children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn :{
        alignItems: 'center'
    },
    count :{
        padding: 3,
        borderRadius: 10,
        alignSelf: 'flex-start'
    }
});

export default ServiceBox;