import React, {useState} from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import TextCustom from '../components/TextCustom';
import ServiceBox from '../components/ServiceBox';

import {Rating} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CacheImage from './CacheImage';



const ProviderWorkHistoryCard = (props) =>{

    const[expand, setExpand] = useState(false);
    const[val, setVal] = useState('none');
    const[icon, setIcon] = useState('sort-up');
    const[margin, setMargin] = useState(1);
    const[text, setText] = useState('more');
  
    const handlePress = () => {
      if(expand) {
        setVal('none');
        setIcon('sort-up');
        setMargin(1);
        setText('more');
      } else {
        setVal('flex');
        setIcon('sort-down');
        setMargin(-7);
        setText('less');
      }
      setExpand(!expand);
    }

    return(
        <View style={styles.screen}>
            <View style={styles.container} >
                <View>
                <TextCustom style={styles.label} >Title</TextCustom>
                <TextCustom style={{...styles.label, alignSelf: 'center', fontSize: 22}}>I need a {props.service}</TextCustom>
                </View>
                <View style={{...styles.userinfo, ...styles.bodyinfo}}>
                    <ServiceBox 
                        style={{height: 32}} 
                        source={props.source} 
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
                        <TextCustom style={{...styles.label, fontSize: 22}} >Rs. {props.budget}</TextCustom>

                    </ServiceBox>

                    <ServiceBox 
                        style={{height: 30}} 
                        source={require('../assets/img/providerService/peoples.png')} 
                        title='People Required'
                        textstyle={{fontSize: 14}}
                    >
                        <TextCustom style={{...styles.label, fontSize: 22}} >{props.person}</TextCustom>

                    </ServiceBox>
                </View>

                <View>

                    <TouchableOpacity 
                        style={{flexDirection: 'row', marginVertical: 10, alignSelf: 'flex-end'}} 
                        onPress={()=> handlePress()}
                    >
                        <Text>show {text}</Text>
                        <Icon style={{paddingTop: 5,}} name={icon} size={12} />
                    </TouchableOpacity>

                    <View style={{display: val, ...styles.wraper}}>
                        <View style={{flexDirection: 'row'}}>
                          <View>
                            <CacheImage source={require('../assets/img/default_male.png')} style={styles.imageStyle} />
                            
                          </View>
                        
                        
                        <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginTop: 6}}>
                          <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.labelColor}>{props.name}</Text>
                            </View>
                            <TextCustom>{props.profession}</TextCustom>
                          </View>
                            <View >                                
                                <Rating
                                    readonly
                                    imageSize={16}
                                    startingValue={4}
                                    style={{ paddingVertical: 5 }}
                                />
                            </View>

                        </View>
                      </View>
                      <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginRight: 15}}>
                        <TextCustom>Completed</TextCustom>
                        <Text style={styles.labelColor2}>1 day ago</Text>

                      </View>
                      <View style={{padding: 20}}>
                            <Text style={styles.labelColor3}>
                                {props.description}
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{color: Colors.accent, textAlign: 'center'}}>Completed</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        backgroundColor: Colors.accent
    },
    container :{
        margin: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
    },
    userinfo :{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    imageStyle: {
      width: 60, 
      height: 60, 
      resizeMode: 'center',
      borderRadius: 66
    },
    label :{
        color: Colors.primary,
    },
    btn :{
        backgroundColor: Colors.primary,
        padding: 10,
    }
});

export default ProviderWorkHistoryCard;