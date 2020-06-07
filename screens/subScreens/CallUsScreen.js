import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import TextCustom from '../../components/TextCustom';
import ButtonBox from '../../components/ButtonBox';

const CallUsScreen = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return(
        <View style={styles.screen}>
        <ScrollView >

            <View style={styles.container}>
            <View style={styles.contHead}>
                <TextCustom style={{...styles.label, fontSize: 22, marginVertical: 10}}>
                    We would love to help you!</TextCustom>
                <TextCustom style={{...styles.label, textAlign: 'left', marginBottom: 20}}>Our customer support is available from 9am to 5pm(Monday to Friday).
                    We are passionate about our community platform as well as our members and it shows the
                    quality of service we provide. If you have any questions feel free to ask!
                </TextCustom>
            </View>
                <View>
                    <TextInput
                        placeholder='Name'
                        placeholderTextColor = {Colors.placeholderAccent}
                        style={styles.txtInput}
                        value={name}
                        onChangeText={(text)=>{setName(text)}}
                    />
                    <TextInput
                        placeholderTextColor = {Colors.placeholderAccent}
                        placeholder='Email'
                        style={styles.txtInput}
                        value={email}
                        onChangeText={(text)=>{setEmail(text)}}
                    />
                    <TextInput
                        placeholder='Please enter your message!'
                        placeholderTextColor = {Colors.placeholderAccent}
                        numberOfLines={4}
                        value={message}
                        onChangeText={(text)=>{setMessage(text)}}
                        multiline={true}
                        textAlignVertical= 'top'
                        style={{...styles.txtInput, height: 120, }}
                    />

                    <ButtonBox
                        text='Send'
                        style={styles.btn}
                        onPress={()=>{}}
                        styleText={{color: Colors.accent}}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <TextCustom style={{...styles.label, marginVertical: 10}}>+9203123456789</TextCustom>
                    <ButtonBox
                        text='Send'
                        style={styles.btn}
                        onPress={()=>{}}
                        styleText={{color: Colors.accent}}
                    />
                </View>
            </ScrollView>

        </View>
    );
} 

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        backgroundColor: Colors.accent,
    },
    container :{
        padding: 20
    },
    label :{
        color: Colors.primary,
        textAlign: 'center',
    },
    txtInput: {
        borderWidth: 1,
        borderColor: Colors.placeholderAccent,
        borderRadius: 4,
        padding: 10,
        backgroundColor: 'white',
        color: Colors.primary,
        marginVertical: 5, 
    },
    btn: {
        alignSelf: 'center',
        backgroundColor: Colors.primary,
        marginVertical: 20

    } ,

    footer: {
        borderTopColor: Colors.accentLight,
        borderTopWidth: 1,
    },
});

export default CallUsScreen;