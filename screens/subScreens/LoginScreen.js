import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ToastAndroid } from 'react-native';
import Colors from '../../constants/Colors';
import InputBox from '../../components/InputBox';
import InputBoxPwd from '../../components/InputBoxPwd';
import ButtonBox from '../../components/ButtonBox';
import Icon from 'react-native-vector-icons/FontAwesome5';

import auth from '@react-native-firebase/auth';
import CacheImage from '../../components/CacheImage';

import AsyncStorage from '@react-native-community/async-storage';

const HEIGHt = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const LoginScreen =({navigation})=> {

    const[email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [secureText, setSecureText] = useState(true);
    const [passIcon, setPassIcon] = useState('eye-slash');

    const [emailCheck, setEmailCheck] = useState(false);
    const [pwdCheck, setPwdCheck] = useState(false);

    const [errorText, setErrorText] = useState('');

    const clearValues =()=>{
      setEmail('');
      setPwd('');
      setEmailCheck(false);
      setPwdCheck(false);
    }

    const loginToast = () => {
      ToastAndroid.showWithGravity(
        "Successfully Login!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    };

    const passSecureEntry = () => {
      if(secureText){
          setSecureText(false);
          setPassIcon('eye');
      }else if(!secureText){
          setSecureText(true);
          setPassIcon('eye-slash');
      }
  }

    const signIn =(e_mail, password)=>{

      if(!e_mail.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")){
        // Alert.alert('Enter Email First')
        setErrorText('Enter Valid Email');

        setEmailCheck(true);
        setPwdCheck(false);
      }else if(password.length < 8){
        // Alert.alert('Enter Password First')
        console.log('passs ko')
        setPwdCheck(true);
        setEmailCheck(false);
      }else{
        setPwdCheck(false);
      auth().
      signInWithEmailAndPassword(e_mail, password).
      then((data) => {
          clearValues();
          console.log('User account signed in!');
            if(data !== null){
               AsyncStorage.setItem('async_user', data.user.uid);
            loginToast();
            navigation.navigate('Check');
            }
            
      })
      .catch(error => {
        
        if (error.code === 'auth/user-not-found') {
          
          setErrorText('That email address does not exist!')
          setEmailCheck(true);
        }else if (error.code === 'auth/email-already-in-use') {
            
          setErrorText('That email address is already in use!')
            setEmailCheck(true);
          }else if (error.code === 'auth/invalid-email') {

            setErrorText('That email address is invalid!')
            setEmailCheck(true);
          }else if(error.code === 'auth/wrong-password'){
            setPwdCheck(true);
            setEmailCheck(false);
          }
          console.log(error);
          
      });
    }
    }

    return (
      <View style={styles.container}>
          <View style={styles.topWraper}>
            <Text style={styles.label2}>
                LOGIN
            </Text>
            <CacheImage source={require('../../assets/img/auth/mobLogin.png')} style={{width: 160, height: 160, resizeMode: 'center'}}/>
          </View>
          <View style={styles.wraper}>
            <View style={styles.inputTextCont}>
              <InputBox 
                  style={{color: Colors.accent}}
                  placeholder='Ex. example@service.com'
                  placeholderTextColor={Colors.placeholderAccent}
                  styleInput={styles.inputTextStyl}
                  text="Email"
                  onChangeText={text => setEmail(text)}
                  value={email}
                  keyboardType='email-address'
              />
              
                <Icon style={styles.iconInput} name='envelope' size={20} color={Colors.accent} />
              
            </View>
            {emailCheck && <Text style={styles.check}>{errorText}</Text>}

            <View style={styles.inputTextCont}>
            <InputBoxPwd 
                style={{color: Colors.accent}}
                placeholder='Ex. ********'
                placeholderTextColor={Colors.placeholderAccent}
                styleInput={styles.inputTextStyl}
                text="Password"
                onChangeText={text => setPwd(text)}
                secureEntry={secureText}
                value={pwd}
            />
            <TouchableOpacity style={styles.iconInput}   onPress={()=>{passSecureEntry()}}>
              <Icon name={passIcon} size={20} color={Colors.accent} />
            </TouchableOpacity>
            </View>
            {pwdCheck && <Text style={styles.check}>Less than 8 or invalid password</Text> }

            <ButtonBox 
                style={{backgroundColor: Colors.accent, marginTop: 10}}
                styleText={{color: Colors.primary}}
                text="SIGN IN"
                onPress={()=> {
                  signIn(email, pwd);
              }}
            />
            <TouchableOpacity onPress={()=> navigation.navigate('ChangePass')}>
                <Text style={styles.label}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomWraper}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}} style={styles.shape}>
                <CacheImage source={require('../../assets/img/auth/arrow-up.png')} style={{width: 50, height: 50, resizeMode: 'center'}}/>
                <Text style={styles.label3}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
    backgroundColor: Colors.primary,
  },
  wraper: {
    width: WIDTH * 0.89,
    backgroundColor: Colors.primary,
    padding: 12,
  },
  inputTextCont :{
    flexDirection: 'row'
  },
  iconInput:{
    paddingTop: 30,
    left: -35
  },
  topWraper: {
    flexDirection: 'row',
    marginBottom: 20
  },
  bottomWraper: {
    width: WIDTH,
    height: 90,
    backgroundColor: Colors.accent,
    marginTop: HEIGHt * 0.1,
    flexDirection: 'row-reverse',
  },
  shape: {
    width: 60,
    minHeight: 100,
    backgroundColor: Colors.textAccent,
    marginTop: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginRight: 4,
    alignItems: 'center',
  },
  label: {
    color: Colors.accent,
    textAlign: 'center',
    marginTop: 12
  },
  label2: {
    color: Colors.accent,
    fontSize: 38,
    marginTop: 100
  },
  label3: {
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 4,
    transform: [{rotate: '270deg'}],
  },
  inputTextStyl :{
    color: Colors.accent,
  },
  check :{
    color: '#fc1905',
    fontSize: 12,
  },
  iconInput :{
    position: 'absolute',
    right: 0,
    top: 25,
  }

});
  
export default LoginScreen;