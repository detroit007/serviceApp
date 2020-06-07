import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/subScreens/LoginScreen';
import SignupScreen from '../screens/subScreens/SignupScreen';
import VerificationScreen from '../screens/subScreens/VerificationScreen';
import DrawerNavigator from '../customerDrawer/DrawerNavigator';
import CheckuserScreen from '../screens/subScreens/CheckuserScreen';
import ProviderServicesStack from '../providerNavigator/ProviderServicesStack';
import ProviderDrawerNavigator from '../providerDrawer/ProviderDrawerNavigator';
import ProviderStartSlider from '../screens/provider/ProviderStartSlider';
import CustomerStartSlider from '../screens/customer/CustomerStartSlider';
import ChangePasswordScreen from '../screens/subScreens/ChangePasswordScreen';

const AuthStack = () =>{
    const Auth = createStackNavigator()
    return(
        <NavigationContainer>
            <Auth.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Auth.Screen 
                    name='Login' 
                    component={LoginScreen} />
                <Auth.Screen name='Signup' component={SignupScreen}/>
                <Auth.Screen name='ChangePass' component={ChangePasswordScreen}
                    options={{
                        title: 'Change Password'
                    }}
                />
                <Auth.Screen name='Verify' component={VerificationScreen} />
                <Auth.Screen name='Check' component={CheckuserScreen} />
                <Auth.Screen name='CustomerSlide' component={CustomerStartSlider} />
                <Auth.Screen name='ProviderSlide' component={ProviderStartSlider} />
                <Auth.Screen name='CustomerDraw' component={DrawerNavigator} />
                <Auth.Screen name='ProviderStack' component={ProviderServicesStack} />
                <Auth.Screen name='ProviderDraw' component={ProviderDrawerNavigator}/>


            </Auth.Navigator>
        </NavigationContainer>
    );
}

export default AuthStack;