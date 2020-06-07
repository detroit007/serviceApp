import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/subScreens/ProfileScreen';
import ReviewScreen from '../screens/subScreens/ReviewScreen';
import EditProfileScreen from '../screens/subScreens/EditProfileScreen';
import ServicesHistoryScreen from '../screens/customer/ServicesHistoryScreen';
import OngoingServicesScreen from '../screens/customer/OngoingServicesScreen';


const ProfileStack = () =>{
    
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator
        screenOptions={({navigation})=>({
            headerTintColor: 'white',
            headerStyle:{
                backgroundColor: Colors.primary,
            },
            headerLeft: ()=>  (
                <TouchableOpacity activeOpacity={0.6} style={{paddingLeft: 7, paddingTop: 3}}
                    onPress={()=>{navigation.toggleDrawer()}}
                >
                    <Icon name='bars' size={23} color='white'/>
                </TouchableOpacity>
            ),
            headerRight: ()=>(
                <View style={styles.rightHeaderBtns}>
                    <TouchableOpacity activeOpacity={0.6} onPress={()=>{navigation.navigate('Inbox')}}>
                        <Icon name='envelope' size={23} color='white'/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} onPress={()=>{navigation.navigate('Notify')}}>
                        <Icon name='bell' size={23} color='white'/>
                    </TouchableOpacity>
                </View>
            )
        })}
        >
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen 
                name='EditProfile' 
                component={EditProfileScreen}

            />
            <Stack.Screen name='ReviewScreen' component={ReviewScreen}/>
            <Stack.Screen name='ServiceHistory' component={ServicesHistoryScreen}/>
            <Stack.Screen name='OngoingService' component={OngoingServicesScreen}/>




        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    rightHeaderBtns :{
        width: 70,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ProfileStack;