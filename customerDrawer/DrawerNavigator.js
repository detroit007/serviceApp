import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomerHomeStack from '../Navigator/CustomerHomeStack';

import SideBar from '../models/SideBar';

import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5'

import InboxStack from '../Navigator/InboxStack';
import NotificationStack from '../Navigator/NotificationStack';
import ProfileStack from '../Navigator/ProfileStack';
import SettingStack from '../Navigator/SettingStack';
import OngoingServiceStack from '../Navigator/OngoingServiceStack';
import ServiceHistoryStack from '../Navigator/ServiceHistoryStack';

const DrawerNavigator =({navigation})=>{

    const Drawer = createDrawerNavigator();

    return(
            <Drawer.Navigator 
                drawerContent={(props)=><SideBar navigation={navigation} {...props} />}
                screenOptions={{
                    tintColor: 'white'
                }}
                drawerContentOptions={{
                    activeTintColor: Colors.textAccent,
                    inactiveTintColor: Colors.textAccent,
                    drawerIcon: ()=> <Icon name='home' color={Colors.textAccent} size={14} />,
                    itemStyle: {
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.textAccent,
                        backgroundColor: Colors.primary,
                        
                    },
                }}
            >
                <Drawer.Screen 
                    name='customerStack' 
                    component={CustomerHomeStack} 
                    options={({navigation})=>({
                        title: 'Home',
                        drawerIcon:()=> <Icon name='home' color={Colors.textAccent} size={14} />
                    })}
                />

                <Drawer.Screen 
                    name='Inbox' 
                    component={InboxStack} 
                    options={{
                        drawerIcon:()=> <Icon name='envelope' color={Colors.textAccent} size={14} />
                    }}
                />

                <Drawer.Screen 
                    name='Service' 
                    component={OngoingServiceStack} 
                    options={{
                        title: 'Ongoing Services',
                        drawerIcon:()=> <Icon name='chevron-right' color={Colors.textAccent} size={14} />
                    }}
                />

                <Drawer.Screen 
                    name='History' 
                    component={ServiceHistoryStack} 
                    options={{
                        title: 'Services History',
                        drawerIcon:()=> <Icon name='clipboard-list' color={Colors.textAccent} size={14} />
                    }}
                />

                <Drawer.Screen 
                    name='Notify' 
                    component={NotificationStack} 
                    options={({navigation})=>({
                        title: 'Notifications',
                        drawerIcon:()=> <Icon name='bell' color={Colors.textAccent} size={14} />
                    })}
                />
                <Drawer.Screen 
                    name='Profile' 
                    component={ProfileStack} 
                    options={({navigation})=>({
                        drawerIcon:()=> <Icon name='user' color={Colors.textAccent} size={14} />
                    })}
                />

                <Drawer.Screen 
                    name='Setting' 
                    component={SettingStack} 
                    options={({navigation})=>({
                        title: 'Settings',
                        drawerIcon:()=> <Icon name='cog' color={Colors.textAccent} size={14} />
                    })}
                />          

            </Drawer.Navigator>
    )
}

export default DrawerNavigator;