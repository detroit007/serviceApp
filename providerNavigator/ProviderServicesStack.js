import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseServiceScreen from '../screens/provider/ChooseServiceScreen';
import ProviderSkillScreen from '../screens/provider/ProviderSkillScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const ProviderServicesStack = () =>{
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name='ProvideService' component={ChooseServiceScreen} 
                options={{
                headerShown: false,
                }}
            />

            <Stack.Screen name='ProviderSkill' component={ProviderSkillScreen}
                options={({navigation})=>({
                    headerTintColor: 'white',
                    headerStyle:{
                        backgroundColor: Colors.primary,
                },
                    title: 'My Skills',
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
            /> 

            <Stack.Screen name='ProviderSkills' component={ProviderSkillScreen} />

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

export default ProviderServicesStack;