import React, {useEffect, useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../constants/Colors';
import CardBox from '../../components/CardBox';
import AsyncStorage from '@react-native-community/async-storage';
import database from '@react-native-firebase/database';


const WIDTH = Dimensions.get('window').width;

const InboxScreen =(props) =>{

    const [check, setCheck] = useState(false);
  const [input, setInput] = useState('');
  const [mic, setMic] = useState('flex');
  const [paper, setPaper] = useState('none');
  const [msgText, setMsgText] = useState('');


  const sendMsg = (uid, pid)=>{
    database()
    .ref('/chats/'+uid+pid)
    .push({
      created_at: 23456,
      messageText: input,
      reciever_id: pid,
      sender_id: uid,
    })
    .then(() => {console.log('Data set.')
        setMsgText('');
    });
  }

  const msgType =(txt)=>{

    setInput(txt);
    if(txt != ''){
      setMic('none');
      setPaper('flex');
    }
    else {
      setMic('flex');
      setPaper('none');
    }
  }

  const getAsyncData =async()=> {
    try {
      let value = await AsyncStorage.getItem('async_user');
      console.log(value);
      if(value !== null) {
        // value = JSON.stringify(value);
        // sendMsg(value, pid);
        // Rzsr8dShdJVO88ItCzTHJ8jWghO2
        sendMsg( value, 'Rzsr8dShdJVO88ItCzTHJ8jWghO2');
      }
    } catch(e) {
      console.log("Error: ", e);
    }
  }

  useEffect(()=>{
      getAsyncData();
  },[])
    
    return(
        <View style={styles.container}>
            <ScrollView>
                <CardBox 
                name="Nawaz Sharif"
                type="plumber"
                price="120"
                ratingVal={4}
                jobsVal={22}
                description="describes how to align"/>

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
    container: {
        flex: 1, 
        backgroundColor: Colors.accent
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

export default InboxScreen;