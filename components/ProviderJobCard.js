import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextCustom from './TextCustom';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';
import ServiceBox from './ServiceBox';
import Accordion from './Accordion';
import ButtonBox from './ButtonBox';
import CacheImage from './CacheImage';

const ProviderJobCard = (props) =>{
    return(
        <View style={{...styles.container , ...props.style}}>
            <View style={styles.userinfo}>
                <View style={{flexDirection: 'row'}}>
                    <CacheImage style={styles.imgStyle} source={require('../assets/img/default_male.png')} />
                    <View style={styles.location}>
                        <TextCustom style={{fontSize: 20, ...styles.label}}>{props.name}</TextCustom>
                        <View style={{flexDirection: 'row'}}>
                        <Icon name='map-marker-alt' style={{marginRight: 5}} size={14} color={Colors.primary} />
                        <Text style={styles.label} >{props.address}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.label} >{props.time}</Text>
                </View>
            </View>

            <View style={{...styles.userinfo, ...styles.bodyinfo}}>
                <ServiceBox 
                    style={{height: 30}} 
                    source={require('../assets/img/providerService/service_required.png')} 
                    title='Service Required'
                    textstyle={{fontSize: 14}}
                >
                    <TextCustom style={{...styles.label, fontSize: 22}} >{props.service}</TextCustom>

                </ServiceBox>

                <ServiceBox 
                    style={{height: 30}} 
                    source={require('../assets/img/providerService/budget.png')} 
                    title='Budget'
                    textstyle={{fontSize: 14}}
                >
                    <TextCustom style={{...styles.label, fontSize: 22}} >RS {props.budget}</TextCustom>

                </ServiceBox>

                <ServiceBox 
                    style={{height: 30}} 
                    source={require('../assets/img/providerService/peoples.png')} 
                    title='People Required'
                    textstyle={{fontSize: 14}}
                >
                    <TextCustom style={{...styles.label, fontSize: 22}} >{props.people}</TextCustom>

                </ServiceBox>

            </View>

            <View style={styles.accordion}>
                <Accordion 
                    style={styles.accordion}
                    titleName='Title' 
                    descriptionFirst={props.title}
                    stitleName='Descripton'
                    descriptionSecond={props.description}
                    addressVisiable="flex"
                    taskVisiable="none"
                >
                    <ButtonBox 
                        style={{backgroundColor: Colors.primary, width: '100%'}} 
                        text='Make Offer' 
                        styleText={{color: Colors.accent}}    
                        onPress={props.onPress}
                    />
                </Accordion>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        elevation: 1,
    },
    userinfo :{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    bodyinfo :{
        marginVertical: 20,
    },
    imgStyle :{
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    label :{
        color: Colors.primary
    },
    accordion :{
        backgroundColor: Colors.accent,
        paddingBottom: 5,
    },
    location :{
        marginLeft: 10

    }
});

export default ProviderJobCard;