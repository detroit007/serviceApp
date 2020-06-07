import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import ServiceBox from '../../components/ServiceBox';
import TextCustom from '../../components/TextCustom';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-community/async-storage';

let userData = [];
const ChooseServiceScreen = ({navigation}) =>{

    const [activeState, setActiveState] = useState(new Array(36).fill(false));
    const [ count, setCount ] = useState(0);

    const buttonPressed =(index, skill)=> {
        const tmpState = activeState.map((val, tmpIndex) => {
            if (tmpIndex === index) {
                return !val;
            }
            return val; 
        });
        setActiveState( tmpState );
        
        if(skill !== null){

            userData.push(skill);
        }
            
    }

    console.log(userData);
    

    const setData = async() =>{
        
        let val  = JSON.stringify(userData);
        await AsyncStorage.setItem('async_service', val);
    }

    return(
    <ScrollView>
        <View style={styles.screen}>
            <View style={styles.headerBar}>

                <TextCustom style={styles.headTitle}>
                    Select the service you can provide
                </TextCustom>

                <TouchableOpacity activeOpacity={0.6} onPress={()=>{
                    setData();
                    navigation.navigate('ProviderSkill')}}>
                    <Icon name='arrow-right' size={22} color={Colors.primary} />
                </TouchableOpacity>
            </View>

            <TextInput 
                style={styles.searchBar} 
                placeholder='serach for a service' 
                placeholderTextColor={Colors.primaryLight}
            />

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                count=''
                style={{width: 40, marginLeft: 20}}
                boxstyle={activeState[0] ? {...styles.pressed, width: '33%'} : { width: '33%'} }
                source={require('../../assets/img/services/plumber.png')} 
                title='Plumber' 
                onPress={()=>{ buttonPressed(0, 'Plumber') }}
            />
            <ServiceBox 
                boxstyle={activeState[1] ? {...styles.pressed, width: '33%'} : {width: '33%'} } 
                source={require('../../assets/img/services/electrician.png')} 
                title='Electrician' 
                onPress={()=>{ buttonPressed(1, 'Electrician') }}
            />
            <ServiceBox 
                source={require('../../assets/img/services/photographer.png')} 
                title='Photographer' 
                boxstyle={activeState[2] ? {...styles.pressed, width: '33%'} : { width: '33%'} }
                onPress={()=>{ buttonPressed(2, 'Photographer') }}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 25, marginLeft: 20}} 
                source={require('../../assets/img/services/cleaning.png')} 
                boxstyle={activeState[3] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(3) }}
                title='Cleaning' 
                
            />
            <ServiceBox 
                source={require('../../assets/img/services/tailor.png')} 
                boxstyle={activeState[4] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(4) }}
                title='Tailor' 

            />
            <ServiceBox 
                source={require('../../assets/img/services/handyman.png')} 
                boxstyle={activeState[5] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(5) }}
                title='Handyman' 
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{height: 37, width: 37}}  
                source={require('../../assets/img/services/pickup.png')} 
                boxstyle={activeState[6] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(6) }}
                title='Pickup Delivery' 
            />
            <ServiceBox 
                style={{width: 43}}  
                source={require('../../assets/img/services/painter.png')} 
                boxstyle={activeState[7] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(7) }}
                title='Painter' 
            />
            <ServiceBox  
                source={require('../../assets/img/services/carpenter.png')} 
                boxstyle={activeState[8] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(8) }}
                title='Carpenter' 
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{height: 30, width: 50}} 
                source={require('../../assets/img/services/car_washer.png')} 
                title='Car Washer' 
                boxstyle={activeState[9] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(9) }}
            />
            <ServiceBox 
                // boxstyle={{marginLeft: -30}} 
                style={{height: 30, width: 40}} 
                source={require('../../assets/img/services/gardner.png')} 
                title='Gardner' 
                boxstyle={activeState[10] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(10) }}
            />
            <ServiceBox 
                style={{height: 30, width: 50}}  
                source={require('../../assets/img/services/moving.png')} 
                title='Moving' 
                boxstyle={activeState[11] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(11) }}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                source={require('../../assets/img/services/handout_flyer.png')} 
                title='Handout Flyer' 
                boxstyle={activeState[12] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(12) }}
            />
            <ServiceBox 
                source={require('../../assets/img/services/beautician.png')} 
                title='Beautician' 
                boxstyle={activeState[13] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(13) }}
            />
            <ServiceBox 
                style={{width: 40}}  
                source={require('../../assets/img/services/driver.png')} 
                title='Drivers' 
                boxstyle={activeState[14] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(14) }}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 45}} 
                source={require('../../assets/img/services/event_planner.png')} 
                title='Event Planner' 
                boxstyle={activeState[15] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(15) }}
            />
            <ServiceBox  
                style={{height: 40, width: 20, marginLeft: -30}} 
                source={require('../../assets/img/services/chief.png')} 
                title='Cooking services' 
                boxstyle={activeState[16] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(16) }}
            />
            <ServiceBox 
                style={{width: 55}}  
                source={require('../../assets/img/services/consultant.png')} 
                title='Consultant' 
                boxstyle={activeState[17] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(17) }}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                source={require('../../assets/img/services/marketing.png')} 
                title='Digital Mareting' 
                boxstyle={activeState[18] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(18) }}
            />
            <ServiceBox 
                source={require('../../assets/img/services/mechanic.png')} 
                title='Mechanic' 
                boxstyle={activeState[19] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(19) }}
            />
            <ServiceBox 
                style={{width: 40}}  
                source={require('../../assets/img/services/welder.png')} 
                title='Welder' 
                boxstyle={activeState[20] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(20) }}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 40, marginLeft: 20}} 
                source={require('../../assets/img/services/ac_service.png')} 
                title='Ac Service' 
                boxstyle={activeState[21] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(21) }}
            />
            <ServiceBox 
                style={{width: 40}} source={require('../../assets/img/services/teacher.png')} 
                title='Teachers' 
                boxstyle={activeState[22] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(22) }}
            />
            <ServiceBox 
                style={{width: 40}}  
                source={require('../../assets/img/services/trainer.png')} 
                title='Trainers' 
                boxstyle={activeState[23] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(23) }}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 40, marginLeft: 20}} 
                source={require('../../assets/img/services/repairing.png')} 
                title='Ac Service' 
                boxstyle={activeState[24] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(24) }}
            />
            <ServiceBox  
                style={{width: 40}} 
                source={require('../../assets/img/services/developer.png')} 
                title='Teachers' 
                boxstyle={activeState[25] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(25) }}
            />
            <ServiceBox 
                style={{width: 35}}  
                source={require('../../assets/img/services/graphic_designer.png')} 
                title='Trainers' 
                boxstyle={activeState[26] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(26) }}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 45, marginLeft: 20}} 
                source={require('../../assets/img/services/ui_designer.png')} 
                title='Ac Service' 
                boxstyle={activeState[27] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(27) }}
            />
            <ServiceBox 
                style={{width: 40}} 
                source={require('../../assets/img/services/video_editor.png')} 
                title='Teachers' 
                boxstyle={activeState[28] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(28) }}
            />
            <ServiceBox 
                style={{width: 40}}  
                source={require('../../assets/img/services/interior_designer.png')} 
                title='Trainers' 
                boxstyle={activeState[29] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(29) }}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{height: 40, width: 20, marginLeft: 20}} 
                source={require('../../assets/img/services/architect.png')} 
                title='Architect' 
                boxstyle={activeState[30] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(30) }}
            />
            <ServiceBox 
                style={{width: 33, 
                marginLeft: 10}} 
                source={require('../../assets/img/services/physiotherapist.png')} 
                title='Physiotherapist' 
                boxstyle={activeState[31] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(31) }}
            />
            <ServiceBox 
                style={{width: 40, marginRight: -20}}  
                source={require('../../assets/img/services/repair.png')} 
                title='Home Repairs' 
                boxstyle={activeState[32] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(32) }}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                source={require('../../assets/img/services/pest_control.png')} 
                title='Pest Controls' 
                boxstyle={activeState[33] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(33) }}
            />
            <ServiceBox 
                style={{width: 50}} 
                source={require('../../assets/img/services/lawyer.png')} 
                title='Legal Advisers' 
                boxstyle={activeState[34] ? {...styles.pressed, width: '33%'} : {width: '33%'} }
                onPress={()=>{ buttonPressed(34) }}
            />
            <ServiceBox 
                style={{height: 6}}  
                source={require('../../assets/img/services/others.png')} 
                title='Others' 
                // boxstyle={activeState[35] ? {...styles.pressed, marginTop: 30, marginRight: 10} :
                //                                                 { marginRight: 10} }
                boxstyle={activeState[35] ? {...styles.pressed, width: '33%',paddingTop: 30} : {paddingTop: 30,width: '33%'} }
                onPress={()=>{ buttonPressed(35) }}
                st
            />
        </View>
    
            
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        paddingTop: 20,
        backgroundColor: Colors.accent
    },
    headerBar :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    serviceRowOne :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    headTitle :{
        color: Colors.primary,
        fontSize: 18,
    },
    searchBar :{
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 50,
        backgroundColor: 'white',
        color: Colors.primary,
        paddingLeft: 10,
    },
    pressed :{
        backgroundColor: Colors.textAccent,
    }
});

export default ChooseServiceScreen;