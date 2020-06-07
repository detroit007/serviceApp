import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import Colors from '../../constants/Colors';
import ButtonBox from '../../components/ButtonBox';
import firestore from '@react-native-firebase/firestore';

const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const ChangePasswordScreen = () =>{

    const[input, setInput] = useState({c_pass:'', n_pass:'', con_pass:''});
    const[oldPwd, setOldPwd] = useState('');

    const [ oldPassCheck, setOldPassCheck] = useState(false);
    const [confirmPassCheck, setConfirmPassCheck] = useState(false);
    const [errorText, setErrorText] = useState('')


    const getData = async()=> {
      await firestore()
      .collection('Users')
      .doc('mwtzfoTsg2NEVI0awAjPLlseDpQ2')
      .get()
      .then(documentSnapshot => { 
        const userData = [];
        if (documentSnapshot.exists) {
          userData.push(documentSnapshot.data());
          setOldPwd(userData[0].pwd);
        }
      });
    }

    const editUser = ()=> {
      if(oldPwd != input.c_pass){
          setOldPassCheck(true);
        setErrorText("Please Enter correct old password");
      }
      else if(input.n_pass !== input.con_pass || !input.n_pass || !input.con_pass){
        setOldPassCheck(false);
          
        setConfirmPassCheck(true);
        setErrorText("Confirm password not matched");
      }
      else {
          setConfirmPassCheck(false);

        firestore()
        .collection('Users')
        .doc('mwtzfoTsg2NEVI0awAjPLlseDpQ2')
        .update({
          pwd: input.con_pass,
        })
        .then(() => {
          setInput({c_pass:'', n_pass:'', con_pass:''});
        });
      }
    }

    useEffect(()=> {
      getData();
    }, []);


    return (
      <View style={styles.container}>

          <Text style={{ fontSize: 24, color: Colors.primary, fontWeight: 'bold'}}>Change Password</Text>
          
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={styles.label}>Current Password</Text> 
          <TextInput
            placeholder="Enter old Password" 
            onChangeText={text => setInput({...input, c_pass: text})}
            value={input.c_pass}
            secureTextEntry={true}
            style={styles.inputStyle}
          />
         </View>
         {setOldPassCheck && <Text style={{color: 'red'}}>{errorText}</Text>}
         <View style={{flexDirection: 'row'}}>
          <Text style={styles.label}>New Password</Text> 
          <TextInput 
            placeholder="Enter New Password"
            onChangeText={text => setInput({...input, n_pass: text})}
            value={input.n_pass}
            secureTextEntry={true}
            style={styles.inputStyle}
          />
         </View>
         <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={styles.label}>Confirm Password</Text> 
          <TextInput 
            placeholder="Enter Confirm Password"
            onChangeText={text => setInput({...input, con_pass: text})}
            value={input.con_pass}
            secureTextEntry={true}
            style={styles.inputStyle}
          />
         </View>
         {setConfirmPassCheck && <Text style={{color: 'red'}}>{errorText}</Text>}

         <ButtonBox 
            style={{backgroundColor: Colors.primary, width: WIDTH * 0.95, marginTop: WIDTH / 2 }}
            styleText={{color: Colors.accent}}
            text="Save"
            onPress={editUser}
         />
      </View>
      
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
  },
  label: {
    marginTop: 12, 
    marginRight: 12, 
    width: WIDTH * 0.30,
    color: Colors.primary
  },
  inputStyle: {
    borderBottomColor: Colors.primary, 
    borderBottomWidth: 1, 
    padding: 0, 
    width: WIDTH * 0.59}
});
  
export default ChangePasswordScreen;