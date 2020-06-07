import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import ServiceBox from '../../components/ServiceBox';
import TextCustom from '../../components/TextCustom';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonBox from '../../components/ButtonBox';

import AsyncStorage from '@react-native-community/async-storage';

const ProviderSkillScreen = ({navigation}) =>{

    const [async_service, setAsync_Service] = useState('');


    const getData = async() =>{
        let val = await AsyncStorage.getItem('async_service');
        if(val !==null){
            setAsync_Service(JSON.parse(val));
        }
    }

useEffect(()=>{
    getData()
},[])

    const renderItemHandler = ( itemData) =>{
        return(
            
                <View style={{height: 35, backgroundColor: Colors.primary, margin: 5, padding: 7, borderRadius: 5}}>
                    <TextCustom style={{color: Colors.accent}}>{itemData.item}</TextCustom>
                </View>
            
        )
    }

    return(
        <View style={styles.screen}>

            <TextCustom  style={styles.label}>Service that I can Provide</TextCustom>
          <View >
            <FlatList
                numColumns={3}
                data={async_service}
                renderItem={renderItemHandler}
                keyExtractor={(item,index)=>{
                    index.toString();
                }}

            />
          </View>

          <TouchableOpacity style={styles.btnAdd} onPress={()=>{
              AsyncStorage.removeItem('async_service');
              navigation.navigate('ProvideService')}}>
            <View style={styles.add}>
                <Icon name='plus' size={45} color={Colors.accent} />
            </View>
          </TouchableOpacity>

          <ButtonBox 
            onPress={()=>{navigation.navigate('ProviderDraw')}}
            style={{backgroundColor: Colors.primary, alignSelf: 'center'}} 
            styleText={{color: Colors.accent}} 
            text='Save' 
        />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.accent,
    },
    label :{
        color: Colors.primary,
        margin: 20,
    },
    add :{
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        borderWidth: 1,
        borderColor: Colors.accent,
        backgroundColor: Colors.primary
    },
    btnAdd :{
        width: 90,
        paddingVertical: 10,
        marginVertical: 20,
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        alignSelf: 'center',

    }
});

export default ProviderSkillScreen;