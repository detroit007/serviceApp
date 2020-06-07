import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, } from 'react-native';
import Colors from '../../constants/Colors';

import TextCustom from '../../components/TextCustom';
import CacheImage from '../../components/CacheImage';

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

const WIDTH = Dimensions.get('window').width;

const CheckuserScreen = ({navigation}) =>{

    const [user, setUser] = useState('');
    const [id, setId] = useState(null);

    const userCheckHandler= async(user)=>{
        if(user !== ''){
            await firestore()
            .collection('Users')
            .doc(id)
            .update({
             user_type: user
            }).then(()=>{
                console.log('success!');
                
            }).catch((error)=>{
                console.log(error);
                
            })
        }
        
    }

    const getData = async() =>{
        let val = await AsyncStorage.getItem('async_user');
        if (val !== null){
            setId(val)
        }
    }

    useEffect(()=>{
        getData();
    }, [id, getData])
    

    return(
        <View style={styles.screen}>
            <View style={styles.imgCont}>
                <CacheImage style={styles.img} source={require('../../assets/img/checkuser/question.png')} />
            </View>

            <View>
                <TouchableOpacity 
                    activeOpacity={0.9}
                    style={styles.buttonBox} 
                    onPress={()=>{
                        userCheckHandler('customer')
                        navigation.navigate('CustomerSlide')}}
                >
                    
                    <CacheImage style={styles.customerImg} source={require('../../assets/img/checkuser/customer.png')} />
                    <TextCustom style={styles.btnText} >Customer</TextCustom>
                
                </TouchableOpacity>
            </View>

            <Text style={{color: Colors.primary, fontSize: 25, paddingVertical: 10, fontWeight: 'bold'}} >
                OR
            </Text>

            <View>
                <TouchableOpacity activeOpacity={0.9} 
                    onPress={()=>{ 
                        userCheckHandler('provider')
                        navigation.navigate('ProviderSlide')}} 
                    style={styles.buttonBox1} 
                >
                    
                    <TextCustom style={styles.btnText1} >Provider</TextCustom>
                    <CacheImage style={styles.customerImg} source={require('../../assets/img/checkuser/provider.png')} />

                
                </TouchableOpacity>
            </View>

       </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.accent,
    },
    buttonBox: {
        width: WIDTH * 0.83,
        flexDirection: 'row',
        height: 55,
        color: Colors.accent,
        backgroundColor: Colors.primary,
        borderRadius: 20,
        paddingTop: 7,
        paddingLeft: 50
    },
    buttonBox1: {
        width: WIDTH * 0.83,
        flexDirection: 'row',
        height: 55,
        color: Colors.accent,
        justifyContent: 'flex-end',
        backgroundColor: Colors.primary,
        borderRadius: 20,
        paddingTop: 7,
        paddingRight: 50
    },
    imgCont :{
        width: 320,
        height: 180,
        // overflow: 'hidden',
        marginBottom: 20,
    },
    img :{
        width: 320,
        height: 160,
    },
    customerImg :{
        width: 40,
        height: 40
    },
    btnText :{
        color: Colors.accent,
        fontSize: 18,
        paddingTop: 10,
        left: -20,
        paddingLeft: 50
    },
    btnText1 :{
        color: Colors.accent,
        fontSize: 18,
        paddingTop: 10,
        left: -20,
        paddingRight: 25
    }

});

export default CheckuserScreen;