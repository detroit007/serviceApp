import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, Switch } from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardBox from '../../components/CardBox';
import ButtonBox from '../../components/ButtonBox';

const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const SettingScreen = ({navigation}) =>{

    const[input, setInput] = useState({name:'Shoqat', proffession:'Developer at veteranlogix', gender:'male', dob:'01/02/2020', bio:'user bio this is bio', email:'shoqat@gmail.com', phone:'1234567890', cnic:'1234567890'});
    const [notification, setNotification] = useState(false);
    const [inChat_sound, setInChatSound] = useState(false);

    const NotificationHandler = () => setNotification(previousState => !previousState);
    const inChat_soundHandler = () => setInChatSound(previousState => !previousState);

    return (     
      
      <View style={styles.container}>
        <Text style={styles.label}>Account Settings</Text>
        <View style={styles.middleWraper}>
            <View style={{width: (WIDTH), paddingRight: 40}}>

              <TouchableOpacity activeOpacity={0.6} onPress={()=>{navigation.navigate('EditProfile')}}>
                <Text style={styles.label2}>Edit Profile</Text> 
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.6} onPress={()=>{navigation.navigate('ChangePass')}}>
                <Text style={styles.label2}>Change Password</Text>
              </TouchableOpacity>

                <View style={styles.switchBtn}>
                    <Text style={styles.label2}>Notifications</Text> 
                    <View style={styles.switch}>
                      <Switch
                          trackColor={{ false: Colors.colorLight, true: Colors.primary }}
                          thumbColor={notification ? 'white' : "white"}
                          ios_backgroundColor="#3e3e3e"
                          onValueChange={NotificationHandler}
                          value={notification}
                      />
                    </View>
                </View>

                <View style={styles.switchBtn}>
                    <Text style={styles.label2}>In-Chat Sounds</Text> 
                    <View style={styles.switch}>
                      <Switch
                          trackColor={{ false: Colors.colorLight, true: Colors.primary }}
                          thumbColor={inChat_sound ? 'white' : "white"}
                          ios_backgroundColor="#3e3e3e"
                          onValueChange={inChat_soundHandler}
                          value={inChat_sound}
                      />
                    </View>
                </View>
            </View>
            
        </View>
        <Text style={styles.label}>Support</Text>
        <View style={{...styles.middleWraper, borderTopColor: Colors.primary, borderBottomWidth: 1, paddingBottom : 20}}>
            <View style={{width: (WIDTH)}}>

              <TouchableOpacity activeOpacity={0.6} onPress={()=>{navigation.navigate('CallUs')}}>
                <Text style={styles.label2}>Call us</Text> 
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.6} onPress={()=>{}}>
                <Text style={styles.label2}>Feedback</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.6} onPress={()=>{navigation.navigate('Privacy')}}>
                <Text style={styles.label2}>Privacy Policy</Text> 
              </TouchableOpacity>

            </View>
            
        </View>
        <TouchableOpacity style={{alignSelf: 'flex-end',}}>
            <Text style={styles.label3}>Deactivate Account</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.accent,
  },
  topWraper: {
    width: WIDTH * 0.95,
    alignItems: 'center'
  },
  middleWraper: {
    width: WIDTH * 0.95,
    flexDirection: 'row',
    marginTop: 16,
    borderTopColor: Colors.primary,
    borderTopWidth: 1,

  }, 
  label: {
    marginTop: 20, 
    marginRight: 12, 
    color: Colors.primary,
    fontWeight: 'bold'
  },
  label2: {
    marginTop: 12, 
    marginRight: 30, 
    color: Colors.primary
  },
  label3: {
    marginTop: 20, 
    marginRight: 12, 
    color: 'red',
  },
  label4: {
    marginTop: 12, 
    textAlign: 'center', 
    color: Colors.primary,
    fontWeight: 'bold'
  },
  inputStyle: {
    borderBottomColor: Colors.primary, 
    borderBottomWidth: 1, 
    padding: 0, 
    width: WIDTH * 0.59,
  },
  switchBtn :{
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  switch: {
    marginTop: 10
  }
});

export default SettingScreen;