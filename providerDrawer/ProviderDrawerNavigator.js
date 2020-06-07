import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import ProviderSideBar from '../models/ProviderSideBar';

import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5'

import InboxStack from '../Navigator/InboxStack';
import NotificationStack from '../Navigator/NotificationStack';
import ProfileStack from '../Navigator/ProfileStack';
import SettingStack from '../Navigator/SettingStack';
import WorkOffersStack from '../Navigator/WorkOffersStack';
import WorkHistoryStack from '../Navigator/WorkHistoryStack';
import DraweritemWorkoffers from '../models/DraweritemWorkOffers';
import ProviderHomeStack from '../Navigator/ProviderHomeStack';
import ProviderProfileStack from '../providerNavigator/ProviderProfileStack';

const ProviderDrawerNavigator =({navigation})=>{

    const Drawer = createDrawerNavigator();

    return(
            <Drawer.Navigator 
                drawerContent={(props)=><ProviderSideBar navigation={navigation} {...props} />}
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
                    name='ProviderStack' 
                    component={ProviderHomeStack} 
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
                    name='WorkOffers' 
                    component={WorkOffersStack} 
                    options={{
                        title: 'Work Offers',
                        drawerIcon:()=> <Icon name='chevron-right' color={Colors.textAccent} size={14} />,
                        
                    }}
                    drawerContent={()=> {<DraweritemWorkoffers  />}}
                />

                <Drawer.Screen 
                    name='WorkHistory' 
                    component={WorkHistoryStack} 
                    options={{
                        title: 'Work History',
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
                    component={ProviderProfileStack} 
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

export default ProviderDrawerNavigator;