import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import CustomerServicesScreen from '../screens/customer/CustomerServicesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import InboxScreen from '../screens/subScreens/InboxScreen';
import NotificationScreen from '../screens/subScreens/NotificationScreen';
import CustomerPostTask from '../screens/customer/CustomerPostTask';
import CustomerAddressScreen from '../screens/customer/CustomerAddressScreen';
import ReviewPostScreen from '../screens/customer/ReviewPostScreen';
import NearbyProviderScreen from '../screens/customer/NearbyProviderScreen';
import OffersScreen from '../screens/customer/OffersScreen';
import ViewOfferScreen from '../screens/subScreens/ViewOfferScreen';

const CustomerHomeStack = () =>{

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
            <Stack.Screen 
                name='CustomService' 
                component={CustomerServicesScreen}
                options={{
                    title: 'Cutomer Services',
                    }}
            />

            <Stack.Screen name='Inbox' component={InboxScreen} />
            <Stack.Screen name='Notify' component={NotificationScreen} />
            <Stack.Screen name='CustomerPostTask' component={CustomerPostTask} 
                options={{
                    title:'Post Task'
                }}
            />
            <Stack.Screen name='CustomerAddress' component={CustomerAddressScreen} 
                options={{
                    title:'Your Location'
                }}
            />
            <Stack.Screen name='NearbyProvider' component={NearbyProviderScreen} 
                options={{
                    title:'Nearby Providers'
                }}
            />
            <Stack.Screen name='ReviewCustomerPost' component={ReviewPostScreen} 
                options={{
                    title:'Review Post'
                }}
            />
            <Stack.Screen name='ViewOffers' component={ViewOfferScreen} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    rightHeaderBtns :{
        width: 70,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default CustomerHomeStack;