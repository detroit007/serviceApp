import React from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import TextCustom from '../../components/TextCustom';
import ServiceBox from '../../components/ServiceBox';
import Colors from '../../constants/Colors';

const CustomerServicesScreen = ({navigation}) =>{
  return(
      <ScrollView>
    <View style={styles.screen}>


            <TextCustom style={styles.headTitle}>
                Choose the service you would like to receive
            </TextCustom>

            <TextInput 
                style={styles.searchBar} 
                placeholder='serach for a service' 
                placeholderTextColor={Colors.primaryLight}
            />

<View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 40, marginLeft: 20}}
                boxstyle={{width: '33%'}}
                source={require('../../assets/img/services/plumber.png')} 
                title='Plumber' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                source={require('../../assets/img/services/electrician.png')} title='Electrician' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}    
            />
            <ServiceBox 
                boxstyle={{width: '33%'}}
                source={require('../../assets/img/services/photographer.png')} 
                title='Photographer' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                boxstyle={{width: '33%'}}
                style={{width: 25, marginLeft: 20}} 
                source={require('../../assets/img/services/cleaning.png')} 
                title='Cleaning' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                source={require('../../assets/img/services/tailor.png')} 
                title='Tailor' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                source={require('../../assets/img/services/handyman.png')} 
                title='Handyman' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{height: 37, width: 37}} 
                source={require('../../assets/img/services/pickup.png')} 
                title='Pickup Delivery' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} style={{width: 43}} 
                source={require('../../assets/img/services/painter.png')} 
                title='Painter' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                source={require('../../assets/img/services/carpenter.png')} 
                title='Carpenter' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{height: 30, width: 50}} 
                source={require('../../assets/img/services/car_washer.png')} 
                title='Car Washer' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                style={{height: 30, width: 40}} 
                source={require('../../assets/img/services/gardner.png')} 
                title='Gardner' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                style={{height: 30, width: 50}}  
                source={require('../../assets/img/services/moving.png')} 
                title='Moving' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                source={require('../../assets/img/services/handout_flyer.png')} 
                title='Handout Flyer' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                source={require('../../assets/img/services/beautician.png')} 
                title='Beautician' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                style={{width: 40}}  
                source={require('../../assets/img/services/driver.png')} 
                title='Drivers' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 45}} 
                boxstyle={{width: '33%'}}
                source={require('../../assets/img/services/event_planner.png')} 
                title='Event Planner' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                style={{height: 40, width: 20}} 
                source={require('../../assets/img/services/chief.png')} 
                title='Cooking services' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                style={{width: 55}} 
                source={require('../../assets/img/services/consultant.png')} 
                title='Consultant' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                source={require('../../assets/img/services/marketing.png')} 
                title='Digital Mareting' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                source={require('../../assets/img/services/mechanic.png')} 
                title='Mechanic' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                style={{width: 40}}  
                source={require('../../assets/img/services/welder.png')} 
                title='Welder' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 40, marginLeft: 20}} 
                source={require('../../assets/img/services/ac_service.png')} 
                title='Ac Service' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                style={{width: 40}} 
                source={require('../../assets/img/services/teacher.png')} 
                title='Teachers' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                style={{width: 40}} 
                source={require('../../assets/img/services/trainer.png')} 
                title='Trainers' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}    
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 40, marginLeft: 20}} 
                source={require('../../assets/img/services/repairing.png')} 
                title='Repairing' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                style={{width: 40}} 
                boxstyle={{width: '33%'}}
                source={require('../../assets/img/services/developer.png')} 
                title='Software Developer' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                style={{width: 35}}  
                source={require('../../assets/img/services/graphic_designer.png')} 
                title='Graphic Designer' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{width: 45, marginLeft: 20}} 
                source={require('../../assets/img/services/ui_designer.png')} 
                title='UI/UX Designer' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                style={{width: 40}} 
                source={require('../../assets/img/services/video_editor.png')} 
                title='Video&Audio editor'
                boxstyle={{width: '33%'}} 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                style={{width: 40}}  
                source={require('../../assets/img/services/interior_designer.png')} 
                title='Interior Designer' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
                style={{height: 40, width: 20, marginLeft: 20}} 
                source={require('../../assets/img/services/architect.png')} 
                title='Architect'
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}} 
            />
            <ServiceBox 
                boxstyle={{width: '33%'}}
                style={{width: 33, marginLeft: 10}} 
                source={require('../../assets/img/services/physiotherapist.png')} 
                title='Physiotherapist' 
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                style={{width: 40, marginRight: -20}} 
                source={require('../../assets/img/services/repair.png')} 
                title='Home Repairs' 
                boxstyle={{width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>

        <View style={styles.serviceRowOne}>
            <ServiceBox 
            source={require('../../assets/img/services/pest_control.png')} 
            title='Pest Controls' 
            boxstyle={{width: '33%'}}
            onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                boxstyle={{width: '33%'}} 
                style={{width: 50}} 
                source={require('../../assets/img/services/lawyer.png')} 
                title='Legal Advisers'
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
            <ServiceBox 
                style={{height: 6}} 
                source={require('../../assets/img/services/others.png')} 
                title='Others' 
                boxstyle={{marginTop: 30,width: '33%'}}
                onPress={()=>{navigation.navigate('CustomerPostTask')}}
            />
        </View>
 
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        padding: 20
    },
    headerBar :{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    serviceRowOne :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    headTitle :{
        color: Colors.primary,
    },
    searchBar :{
        marginVertical: 10,
        marginHorizontal: -10,
        borderRadius: 50,
        backgroundColor: 'white',
        color: Colors.primary,
        paddingLeft: 10,
    }
})

export default CustomerServicesScreen;