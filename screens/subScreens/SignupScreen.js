import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator, ToastAndroid } from 'react-native';
import Colors from '../../constants/Colors';
import InputBox from '../../components/InputBox';
import InputBoxPwd from '../../components/InputBoxPwd';
import ButtonBox from '../../components/ButtonBox';
import Icon from 'react-native-vector-icons/FontAwesome5';

import auth from '@react-native-firebase/auth';
import CacheImage from '../../components/CacheImage';

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';


const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const SignupScreen =({navigation })=> {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [phone, setPhone] = useState('');

  const [isLoading, setIsLoading] = useState(false)

  const [secureText, setSecureText] = useState(true);
    const [passIcon, setPassIcon] = useState('eye-slash')

  const [nameCheck , setNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwdCheck, setPwdCheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const signUpToast = () => {
    ToastAndroid.showWithGravity(
      "Account Created!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  const clearValues = () =>{
    setName('');
    setEmail('');
    setPhone('');
    setPwd('');
    setNameCheck(false);
    setEmailCheck(false);
    setPhoneCheck(false);
    setPwdCheck(false);
  }

  const passSecureEntry = () => {
    if(secureText){
        setSecureText(false);
        setPassIcon('eye');
    }else if(!secureText){
        setSecureText(true);
        setPassIcon('eye-slash');
    }
}

  const signup = (e_mail, password)=>{

    let num = ('+92'+ phone.replace(/\b0+/g, ''));
    const regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;

    if(name === ''){
      setNameCheck(true);
    }else if(!email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")){
      setEmailError('Enter Valid Email')
      setEmailCheck(true);
      setNameCheck(false);
    }else if(!regexp.test(num)){
      setPhoneError('Enter Valid Phone Number')
      setPhoneCheck(true);
      setEmailCheck(false);
    }else if(pwd === ''){
      setPwdCheck(true);
      setPhoneCheck(false);
    }else{
      setIsLoading(true)
      auth().createUserWithEmailAndPassword(e_mail, password)
      .then(data => {
          console.log('User account created & signed in!');
          
        AsyncStorage.setItem('async_user', data.user.uid) ;
        console.log(data.user.uid);

          firestore()
          .collection('Users')
          .doc(data.user.uid)
          .set({
              avatar: 'null',
              name: name,
              email: e_mail,
              phone: num,
              pwd: password,
              gender: 'null',
              profession: 'null',
              user_type: 'null',
              user_status: true,
              email_status: true,
              phone_status: false,
              bio: 'null',
              cnic: 'null',
              dob: 'null',
          })
          .then(() => {
            console.log('User added!');
            setIsLoading(false)
      
            clearValues();
            
            signUpToast();
            navigation.navigate('Verify', {phone: num,
              id: data.user.uid,
            })
                  
          });

      })
      .catch(error => {
          if (error.code === 'auth/email-already-in-use') {

            setEmailError('That email address is already in use!');
            setEmailCheck(true);

          }
  
          if (error.code === 'auth/invalid-email') {
            setEmailError('That email address is invalid!');
            setEmailCheck(true);

          }
      });
    }
    }

    return (
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.innerCont} >
          <View style={styles.bottomWraper}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.shape}>
                <CacheImage source={require('../../assets/img/auth/arrow-forward.png')} style={{width: 50, height: 50, resizeMode: 'center'}}/>
                <Text style={styles.label3}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.topWraper}>
            <CacheImage source={require('../../assets/img/auth/mobSignup.png')} style={{width: 160, height: 160, resizeMode: 'center'}}/>
            <Text style={styles.label2}>
                SIGN UP
            </Text>
          </View>
          <View style={styles.wraper}>
            <View style={styles.inputTextCont}>
              <InputBox 
                  style={{color: Colors.primary}}
                  placeholder='Ex. Tom'
                  styleInput={{color: Colors.primary}}
                  text="Name"
                  onChangeText={text => setName(text)}
                  value={name}
              />
              <Icon style={styles.iconInput} name='pen' size={18} />
            </View>
            {nameCheck && <Text style={styles.check}>Enter your name first</Text>}

            <View style={styles.inputTextCont}>
              <InputBox 
                  style={{color: Colors.primary}}
                  placeholder='Ex. example@service.com'
                  styleInput={{color: Colors.primary}}
                  keyboardType='email-address'
                  text="Email"
                  onChangeText={text => setEmail(text)}
                  value={email}
              />
              <Icon style={styles.iconInput} name='envelope' size={18} />
            </View>
            {emailCheck && <Text style={styles.check}>{emailError}</Text>}


            <View style={styles.inputTextCont}>
              <InputBox 
                  style={{color: Colors.primary}}
                  placeholder='Ex. 03123456789'
                  styleInput={{color: Colors.primary}}
                  keyboardType='phone-pad'
                  text="Phone"
                  // maxLength={11}
                  onChangeText={text => setPhone(text)}
                  value={phone}
              />

              <Icon style={styles.iconInput} name='phone' size={18} />  
            </View>
            {phoneCheck && <Text style={styles.check}>{phoneError}</Text>}

            <View style={styles.inputTextCont}>
              <InputBoxPwd 
                  style={{color: Colors.primary}}
                  placeholder='Ex. ********'
                  numberOfLines={1}
                  styleInput={{color: Colors.primary}}
                  text="Password"
                  onChangeText={text => setPwd(text)}
                  secureEntry={secureText}
                  value={pwd}
              />

              <TouchableOpacity style={styles.iconInput} onPress={()=>{passSecureEntry()
              }}>
                <Icon  name={passIcon} size={18} />
              </TouchableOpacity>

            </View>
            {pwdCheck && <Text style={styles.check}>Enter password first</Text>}
            <ButtonBox 
                style={{backgroundColor: Colors.primary, marginTop: 10}}
                styleText={{color: Colors.accent}}
                
                onPress={()=> {
                  signup(email, pwd);
                }}
            >
              {isLoading ? <ActivityIndicator style={{ marginTop: -15}} size={18} color={Colors.accent} /> : 
              <Text style={{fontWeight: 'bold', color: Colors.accent, textAlign: 'center', marginTop: -15}}>
                SIGN UP
              </Text>
              }
            </ButtonBox>
          </View>

        </View>
      </ScrollView>
    </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.accent,
  },
  innerCont :{
    flex: 1,
    alignItems: 'center',
  },
  wraper: {
    width: WIDTH * 0.89,
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
    borderWidth: 2,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    marginBottom: 10
  },
  topWraper: {
    flexDirection: 'row',
    marginBottom: -10
  },
  bottomWraper: {
    width: WIDTH,
    height: 60,
    backgroundColor: Colors.primary,
    flexDirection: 'row-reverse',
  },
  inputTextCont :{
    flexDirection: 'row',
  },
  iconInput :{
    paddingTop: 30,
    left: -35,
    color: Colors.primary,
  },
  shape: {
    flexDirection: 'column-reverse',
    width: 60,
    minHeight: 100,
    backgroundColor: Colors.primary,
    marginTop: -10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginRight: 4,
    alignItems: 'center',
  },
  label: {
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 12
  },
  label2: {
    color: Colors.primary,
    fontSize: 38,
    marginTop: 100
  },
  label3: {
    color: Colors.accent,
    textAlign: 'center',
    marginBottom: 6,
    transform: [{rotate: '90deg'}],
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
  
export default SignupScreen;