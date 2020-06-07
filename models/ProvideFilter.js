import React, { useState } from 'react';
import { View, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import TextCustom from '../components/TextCustom';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Slider, CheckBox } from 'react-native-elements';
const ProviderFilter = (props) => {

const [sliderVal, setSliderVal] = useState(0);
const [checked, setChecked] = useState(false);


return(
    <View style={styles.modalCont}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
                onCancel={props.cancelModal}
            >
                <View style={styles.innerCont}>
                    <View style={styles.bodyCont}>

                        <View style={{width: '100%',flexDirection: 'row',justifyContent: 'space-between'}}>
                            <TouchableOpacity onPress={props.onCancel} activeOpacity={0.6} >
                                <Icon name='times' size={25} color='red' />
                            </TouchableOpacity>

                            <TextCustom style={{color: Colors.primary, fontSize: 22}}>Filter</TextCustom>

                            <TouchableOpacity onPress={props.onSubmit} activeOpacity={0.6} >
                                <Icon name='save' color={Colors.primary} size={25} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.modalbodyCont}>

                        <Icon name='search' size={16} color={Colors.accentLight} style={{paddingLeft: 10}} />
                        <TextInput 
                            placeholder='Lahore, Pakistan'
                            style={styles.input}
                        />
                            
                        </View>

                        <View style={styles.priceCont}>
                            <View style={{flexDirection: 'row', marginLeft: -5, width:'65%', justifyContent: 'space-between'}}>
                                <TextCustom style={styles.label} >Price Range</TextCustom>
                                <TextCustom style={styles.label} >RS 0-9,999</TextCustom>
                            </View>
                            <View style={styles.sliderCont}>
                                <Slider
                                    value={sliderVal}
                                    minimumValue= {0}
                                    maximumValue={9999}
                                    onValueChange={value => setSliderVal(value)}
                                    thumbStyle={{backgroundColor : Colors.primary}}
                                    minimumTrackTintColor={Colors.primaryLight}
                                />
                                <TextCustom style={{ ...styles.label, alignSelf: 'center'}} >{Math.floor(sliderVal)}</TextCustom>
                            </View>
                        
                        </View>

                        <View style={{width: '100%', marginTop: 10}}>
                            <TextCustom style={{ ...styles.label, paddingLeft: 10}} >Show task by my skills</TextCustom>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                            <CheckBox
                                title='Plumber'
                                checked={checked}
                                containerStyle={styles.checCont}
                                textStyle={styles.label}
                                onPress={()=>setChecked(!checked)}
                                checkedColor={Colors.primary}
                            />
                            <CheckBox
                                title='Moving'
                                textStyle={styles.label}
                                checked={checked}
                                containerStyle={styles.checCont}
                                onPress={()=>setChecked(!checked)}
                                checkedColor={Colors.primary}
                            />
                            <CheckBox
                                textStyle={styles.label}
                                title='Gardner'
                                checked={checked}
                                containerStyle={styles.checCont}
                                onPress={()=>setChecked(!checked)}
                                checkedColor={Colors.primary}
                            />
                            </View>
                        </View>

                         <TouchableOpacity style={{alignSelf: 'flex-end', marginTop: 15, right: 20}} onPress={()=>setChecked(!checked)}>
                             <TextCustom style={styles.label} >Select All</TextCustom>
                         </TouchableOpacity>

                        
                    </View>

                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    innerCont :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyCont :{
        borderRadius: 10,
        alignItems: 'center',
        elevation: 10,
        width: '90%',
        height: 320,
        backgroundColor: Colors.textAccent,
        padding: 5,
    },
    modalbodyCont :{
        marginTop: 10,
        flexDirection :'row', 
        width: '95%', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        borderRadius: 10,
    },
    label :{
        color: Colors.primary
    },
    priceCont :{
        width: '90%',
        marginTop: 10,

    },
    sliderCont :{
        width: '90%',
        alignSelf: 'center',
    },
    checCont :{
        backgroundColor: 'transparent', 
        borderWidth: 0,
        padding: 0
    }
});

export default ProviderFilter;