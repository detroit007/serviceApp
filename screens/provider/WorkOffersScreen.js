import React, { useState, useEffect } from 'react';
import { View ,Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import TextCustom from '../../components/TextCustom';
import ServiceBox from '../../components/ServiceBox';
import Colors from '../../constants/Colors';
import ButtonBox from '../../components/ButtonBox';

import Icon from 'react-native-vector-icons/FontAwesome5';

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import database from '@react-native-firebase/database';

let userData = [];
let taskData = '';
const WorkOffersScreen = () =>{

  const[postTaskData, setPostTaskData] = useState('');

  const [check, setCheck] = useState(false);
  const [mic, setMic] = useState('flex');
  const [paper, setPaper] = useState('none');
  const [msgText, setMsgText] = useState('');

  const msgType =(txt)=>{

    if(txt != ''){
      setMic('none');
      setPaper('flex');
    }
    else {
      setMic('flex');
      setPaper('none');
    }
  }


    const getOffers=(uid)=>{
    // taskData = item[0];
    firestore()
    .collection('Offers')
    .where('task_id', '==', 'TXTMgCQy3eIzaELSMvyk')
    .get()
    .then(querySnapshot => {
      if(querySnapshot.size < 1){
        setCheck(true);
      }
      else {
        setCheck(false);
        let i = 0;
        querySnapshot.forEach(documentSnapshot => {
          firestore()
          .collection('Users')
          .doc(documentSnapshot.data().uid)
          .get()
          .then(documentSnapshot2 => {
            if (documentSnapshot2.exists) {
              userData.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id, 
                user: documentSnapshot2.data(),
              });     
              i++;
              if(i == querySnapshot.size){  
                setPostTaskData(userData);
                console.log(userData);
              }
            }
          });
        });
      }
    });
  }

  const taskUpdate=(uid, name, service)=> {
    firestore()
    .collection('Tasks')
    .doc(taskData.key)
    .update({
      provider_id: uid
    })
    .then(() => {
      console.log('User updated!');
      createNoti(uid, name, service);
      getAsyncData(uid);
    });
  }

  const Inbox=(uid, pid)=>{
    firestore()
    .collection('Inbox')
    .add({
      provider_id: pid,
      uid: uid,
      total_msgs: null,
      updated_at: firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log('User added!');
      navigation.navigate('ProviderChatScreen', { item: postTaskData });
    });
  }

  const getAsyncData =async(pid)=> {
    try {
      let value = await AsyncStorage.getItem('async_user');
      if(value !== null) {
        // value = JSON.parse(value);
        Inbox(value, pid);
      }
    } catch(e) {
      console.log("Error: ", e);
    }
  }
  useEffect(()=> {
    getOffers();
  }, []);

  const createNoti=(uid, provider, service)=>{
    database()
    .ref('/notification/'+uid)
    .push({
      created_at: new Date().getTime(),
      txt: "You accepted the " +provider+ "offer for the service of " +service,
      status: 0,
    })
    .then(() => console.log('Data set.'));
  }

    return(
        <View style={styles.screen}>
          <ScrollView>
          
          <View style={styles.container}>

            <View>
                <TextCustom style={styles.label} >Title</TextCustom>
                <TextCustom style={{...styles.label, alignSelf: 'center', fontSize: 22}}>I need a plumber</TextCustom>

            </View>

            <View style={{...styles.userinfo, ...styles.bodyinfo}}>
                <ServiceBox 
                    style={{height: 30}} 
                    source={require('../../assets/img/providerService/service_requiredw.png')} 
                    title='Service Required'
                    textstyle={{fontSize: 14, ...styles.label}}
                >
                    <TextCustom style={{...styles.label, fontSize: 22}} >Plumber</TextCustom>

                </ServiceBox>

                <ServiceBox 
                    style={{height: 30}} 
                    source={require('../../assets/img/providerService/budgetw.png')} 
                    title='Budget'
                    textstyle={{fontSize: 14, ...styles.label}}
                >
                    <TextCustom style={{...styles.label, ...styles.label, fontSize: 22}} >Rs. 300</TextCustom>

                </ServiceBox>

                <ServiceBox 
                    style={{height: 30}} 
                    source={require('../../assets/img/providerService/peoplesw.png')} 
                    title='People Required'
                    textstyle={{fontSize: 14, ...styles.label}}
                >
                    <TextCustom style={{...styles.label, fontSize: 22}} >01</TextCustom>
                </ServiceBox>
            </View>

            <View>
                <TextCustom style={{marginVertical: 20, ...styles.label}} >Description</TextCustom>
                <TextCustom style={{...styles.label, marginBottom: 10, paddingHorizontal: 20}} >
                    CheckBoxes allow users to complete tasks that involve making choices such as selecting options, 
                    or switching settings on or off. 
                </TextCustom>
            </View>

          </View>

          <View style={{alignSelf: 'center', marginTop: 15}}>
              <ButtonBox style={{backgroundColor: Colors.primary}} styleText={styles.label} text='ACCEPT'  />

              <ButtonBox style={{backgroundColor: Colors.primary, marginVertical: 10}} styleText={styles.label} text='DECLINE'  />

          </View>
        </ScrollView>

          <View style={styles.messageBox}>

                <TouchableOpacity activeOpacity={0.6} onPress={()=>{}}>
                    <Icon style={{...styles.msgIcons, paddingRight: 10}} name='camera'  size={22} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} onPress={()=>{}}>
                    <Icon style={{...styles.msgIcons, paddingRight: 10}} name='link'  size={22} />
                </TouchableOpacity>

                <TextInput 
                    style={styles.msgTextinput} 
                    placeholder='write a meassage' 
                    placeholderTextColor={Colors.textAccent}
                    onChangeText={text=> {setMsgText(text)
                         msgType(text)}}
                    value={msgText}
                />

                <TouchableOpacity activeOpacity={0.6} onPress={()=>{}}>
                    <Icon style={{...styles.msgIcons, paddingLeft: 10, display:mic}} 
                        name='microphone'  size={22} 
                    />
                    <Icon style={{...styles.msgIcons, paddingLeft: 8, display:paper }} 
                        name='paper-plane'  size={22} 
                        onPress={()=> getAsyncData('Rzsr8dShdJVO88ItCzTHJ8jWghO2')}
                    />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        backgroundColor: Colors.accent,
    },
    container :{
        margin: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: Colors.primary,
    },
    userinfo :{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    label :{
        color: Colors.accent,
    },
    messageBox :{
      flexDirection: 'row',
      paddingLeft: 10,
      paddingVertical: 10,
      backgroundColor: 'white',
      width: '100%',
      height: 60, 
  },
  msgTextinput  :{
    width: WIDTH * 0.71,
    borderRadius: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderColor: Colors.textAccent,
  },
  msgIcons :{
    color: Colors.textAccent,
    paddingTop: 10,
  },
});

export default WorkOffersScreen;