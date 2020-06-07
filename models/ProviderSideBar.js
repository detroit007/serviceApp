import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import {
    DrawerItemList,
  } from '@react-navigation/drawer';

import Colors from '../constants/Colors';
import Icon  from 'react-native-vector-icons/FontAwesome5';

const ProviderSideBar = (props) =>{
    return(
        <View style={styles.screen}>

            <View style={styles.bodyCont}>

                <View style={styles.headCount}>

                    <TouchableOpacity style={styles.closeBtnCont} onPress={()=>props.navigation.closeDrawer()}>
                        <Text style={styles.closeBtn}>X</Text>
                    </TouchableOpacity>

                    <Text style={styles.title}>{props.title}Menu</Text>
                </View>

                <View style={styles.body}>

                    <TouchableOpacity 
                        style={styles.logoutBtn} 
                        onPress={()=>{props.navigation.navigate('Setting')}}
                    >

                        <Icon name='power-off' size={14} color={Colors.primary} />

                    </TouchableOpacity>

                    <View style={styles.profileInfo}>

                        <Image style={styles.image} source={require('../assets/img/default_male.png')} />

                        <View style={styles.profileText}>

                            <Text style={styles.titleText}>Lorem ipsum</Text>

                            <View style={styles.location}>

                                <Icon name='map-marker-alt' style={{paddingTop: 2}} color={Colors.textAccent} />

                                <Text style={styles.locationText}>Lahore, Pakistan</Text>

                            </View>
                        </View>
                    </View>
                </View>
            </View>

                <DrawerItemList {...props} />

        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        backgroundColor: Colors.primary,
    },
    bodyCont :{
        backgroundColor: Colors.primary,

    },
    body :{

        width: '100%',
        height: 150,
        flexDirection: 'row',
        paddingTop: 40,
    },
    logoutBtn :{
        width: 40,
        height: 20,
        marginTop: 20,
        marginRight: 10,
        paddingTop: 2,
        paddingLeft: 15,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: Colors.textAccent,
    },
    profileInfo :{
        flexDirection: 'row',
    },
    profileText :{
        paddingLeft: 5,
        paddingTop: 5,
    },
    titleText :{
        fontSize: 20,
        color: Colors.textAccent,
    },
    location :{
        flexDirection: 'row',
        paddingLeft: 5,
    },
    locationText :{
        paddingLeft: 3,
        color: Colors.textAccent,
    },
    image :{
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    headCount :{
        flexDirection: 'row',
        width: 120,
        paddingTop: 10,
        justifyContent: 'space-around'
    },
    closeBtnCont :{

    },
    closeBtn :{
        color: Colors.textAccent,
        fontSize: 20,

    },
    title :{
        fontSize: 20,
        color: Colors.textAccent
    }
});

export default ProviderSideBar;