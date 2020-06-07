import React, { useState } from 'react';
import { StyleSheet, 
         TextInput, 
         Text, 
         View, 
         Dimensions, 
         ToastAndroid,
         Alert } from 'react-native';
import Colors from '../../constants/Colors';
import CacheImage from '../../components/CacheImage';
import ButtonBox from '../../components/ButtonBox';

import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';



const WIDTH = Dimensions.get('window').width;

const VerificationScreen =({ navigation, route})=> {

  const { phone, id } = route.params;

    const [ num1, setNum1] = useState('');
    const [ num2, setNum2] = useState('');
    const [ num3, setNum3] = useState('');
    const [ num4, setNum4] = useState('');
    const [ num5, setNum5] = useState('');
    const [ num6, setNum6] = useState('');

    let input2, input3, input4, input5, input6;

    const [confirm, setConfirm] = useState(null);

    const showToastWithGravity = () => {
      ToastAndroid.showWithGravity(
        "Code Sent!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    };

    const toast = (err) => {
      ToastAndroid.showWithGravity(
        `${err}`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    };


    const phoneAuth = async() =>{
      try{
      let confirmation = await auth().signInWithPhoneNumber(phone);
      setConfirm(confirmation);
      console.log(confirm)
      showToastWithGravity();
      }
      catch(error){

        toast(error);
        
      }
    }

    const confirmCode=async()=> {
      let code = num1+''+num2+''+num3+''+num4+''+num5+''+num6;
      try{
          const data =  await confirm.confirm(code);
          console.log('Number Registered!');
      }
      catch(error){
        toast(error)
      }

         firestore()
         .collection('Users')
         .doc(id)
         .update({
          phone_status: true
         })
         .then(() => {
           console.log('User updated!');
           Alert.alert(
            "Alert!",
            'User account signed in!',
            [
              { text: "OK",
               onPress: () => {
                 navigation.navigate('Check')
                } }
            ],
            { cancelable: false }
          );
         }).catch((error)=>{
           console.log(error);
      //   if(error.auth._verificationId === null){
      //     console.log('Number already exist');
      //   }else{
      //     console.log('something went wrong')
      //   }
      })
    }


    return (
      <View style={styles.container}>
        <Text style={styles.label2}>VERIFICATION</Text>
        <CacheImage source={require('../../assets/img/verification/Confirmation.png')} style={{width: 300, height: 300, resizeMode: 'center', marginTop: -60}} />
        <View style={styles.wraper}>
            <CacheImage source={require('../../assets/img/verification/icon.png')} style={{width: 60, height: 60, resizeMode: 'center'}} />
            <Text style={styles.label}>Please type the verification code send to <Text style={{fontWeight: 'bold'}}>+9345678970</Text></Text>
        </View>
        <View style={styles.middleWraper}>
            <TextInput 
                style={styles.numberInput}
                placeholder="--"
                placeholderTextColor={Colors.colorPrimary}
                onChangeText={text => setNum1(text)}
                value={num1}
                keyboardType='numeric'
                blurOnSubmit={false}
                onSubmitEditing={()=> input2.focus()}
                maxLength={1}
            />
            <TextInput 
                ref={ref => {
                  input2 = ref;
                }}
                style={[styles.numberInput]}
                placeholder="--"
                placeholderTextColor={Colors.colorPrimary}
                onChangeText={text => setNum2(text) && input3.focus()}
                value={num2}
                blurOnSubmit={false}
                keyboardType='numeric'
                onSubmitEditing={()=>input3.focus()}
                maxLength={1}
            />
            <TextInput 
                ref={ref => {
                  input3 = ref;
                }}
                style={[styles.numberInput]}
                placeholder="--"
                placeholderTextColor={Colors.colorPrimary}
                onChangeText={text => setNum3(text)}
                value={num3}
                blurOnSubmit={false}
                onSubmitEditing={()=>input4.focus()}
                keyboardType='numeric'
                maxLength={1}
            />
            <TextInput 
                ref={ref => {
                  input4 = ref;
                }}
                style={[styles.numberInput]}
                placeholder="--"
                blurOnSubmit={false}
                placeholderTextColor={Colors.colorPrimary}
                onChangeText={text => setNum4(text)}
                value={num4}
                onSubmitEditing={()=>input5.focus()}
                keyboardType='numeric'
                maxLength={1}
            />
            <TextInput 
                ref={ref => {
                  input5 = ref;
                }}
                style={[styles.numberInput]}
                blurOnSubmit={false}
                placeholder="--"
                placeholderTextColor={Colors.colorPrimary}
                onChangeText={text => setNum5(text)}
                value={num5}
                onSubmitEditing={()=>input6.focus()}
                keyboardType='numeric'
                maxLength={1}
            />
            <TextInput 
                ref={ref => {
                  input6 = ref;
                }}
                style={[styles.numberInput]}
                blurOnSubmit={false}
                placeholder="--"
                placeholderTextColor={Colors.colorPrimary}
                onChangeText={text => setNum6(text)}
                value={num6}
                keyboardType='numeric'
                maxLength={1}
            />

        </View>
        <View style={{width:'80%', marginTop: 80}} >
                {!confirm ?
        <ButtonBox 
                style={{backgroundColor: Colors.primary, marginTop: 10}}
                styleText={{color: Colors.accent}}
                text="PRESS ME TO GET CODE"
                onPress={()=> {
                    phoneAuth();
                }}
            /> :
            <ButtonBox 
                style={{backgroundColor: Colors.primary, marginTop: 10}}
                styleText={{color: Colors.accent}}
                text="SUBMIT"
                onPress={()=> {
                    confirmCode();
                }}
            />
            }
        </View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: Colors.accent,
  },
  wraper: {
    width: WIDTH * 0.89,
    flexDirection: 'row',
    marginTop: -50
  },
  middleWraper: {
    width: WIDTH * 0.89,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    padding: 12
  },
  numberInput: {
    backgroundColor: Colors.colorAccent,
    color: Colors.colorPrimary,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 1,  
    elevation: 1
  },
  label: {
    color: Colors.colorPrimary,
    marginTop: 12,
    marginLeft: 8
  },
  label2: {
    color: Colors.colorPrimary,
    fontSize: 38,
    marginTop: 10
  },
  label3: {
    color: Colors.colorPrimary,
    textAlign: 'center',
    transform: [{rotate: '270deg'}],
  }

});
  
export default VerificationScreen;