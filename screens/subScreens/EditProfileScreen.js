import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Colors from '../../constants/Colors';
import TextCustom from '../../components/TextCustom';
import ButtonBox from '../../components/ButtonBox';

import firestore from '@react-native-firebase/firestore';


const EditProfileScreen = (props) => {

    const[input, setInput] = useState({name:'', profession:'', gender:'', dob:'', bio:'', email:'', phone:'', cnic:''});

    const getData =async()=> {
      await firestore()
      .collection('Users')
      .doc('mwtzfoTsg2NEVI0awAjPLlseDpQ2')
      .get()
      .then(documentSnapshot => { 
        const userData = [];
        if (documentSnapshot.exists) {
          userData.push(documentSnapshot.data());
          setInput({
            name: userData[0].name,
            profession: userData[0].profession, 
            gender: userData[0].gender, 
            dob: userData[0].dob, 
            bio: userData[0].bio, 
            email: userData[0].email, 
            phone: userData[0].phone, 
            cnic: userData[0].cnic,
          });
        }
      });
    }

    const editUser =()=> {
      firestore()
      .collection('Users')
      .doc('mwtzfoTsg2NEVI0awAjPLlseDpQ2')
      .update({
        name: input.name,
        profession: input.profession, 
        gender: input.gender, 
        dob: input.dob, 
        bio: input.bio, 
        email: input.email, 
        phone: input.phone, 
        cnic: input.cnic,
      })
      .then(() => {
        console.log('User updated!');
      });
    }

    useEffect(()=> {
      getData();
    }, []);

    return (
        <View>
          <ScrollView>

            <View style={styles.profileImgCont}>
                <Image 
                    source={require('../../assets/img/default_male.png')} 
                    style={styles.profileImg}
                />
                <TouchableOpacity activeOpacity={0.6}>
                    <TextCustom style={{color: 'darkblue'}} >updat profile</TextCustom>
                </TouchableOpacity>
            </View>

            <View style={styles.info}>
                <TextCustom 
                  style={{paddingVertical: 20, color: Colors.primary, fontSize: 20}} >
                    Personal Information
                </TextCustom>

                <View style={styles.profileInfoCont}>
                    <View style={styles.profileInfo}>
                        <TextCustom style={styles.label}>Name</TextCustom>
                        <TextInput style={styles.textInput} 
                            placeholder="Enter Name"
                            onChangeText={text => setInput({...input, name: text})}
                            value={input.name} 
                        />
                    </View>
                    
                    <View style={styles.profileInfo}>
                        <TextCustom style={styles.label}>Profession</TextCustom>
                        <TextInput style={styles.textInput} 
                            placeholder="Enter Profession"
                            onChangeText={text => setInput({...input, profession: text})}
                            value={input.profession} 
                        />
                    </View>

                    <View style={styles.profileInfo}>
                        <TextCustom style={styles.label}>Gender</TextCustom>
                        <TextInput style={styles.textInput} 
                            placeholder="Your Gender" 
                            onChangeText={text => setInput({...input, gender: text})}
                            value={input.gender} 
                        />
                    </View>

                    <View style={styles.profileInfo}>
                        <TextCustom style={styles.label}>Date of Birth</TextCustom>
                        <TextInput style={styles.textInput} 
                            placeholder="Enter Date of Birth"
                            onChangeText={text => setInput({...input, dob: text})}
                            value={input.dob} 
                        />
                    </View>

                    <View style={styles.profileInfo}>
                        <TextCustom style={styles.label}>Bio</TextCustom>
                        <TextInput style={styles.textInput} 
                            placeholder="Enter Bio"
                            onChangeText={text => setInput({...input, bio: text})}
                            value={input.bio} 
                        />
                    </View>

                </View>

                <View style={{ alignItems: 'center'}} >

                    <TextCustom 
                      style={{paddingVertical: 20, color: Colors.primary, fontSize: 20}} >
                        Your Location
                    </TextCustom>

                    <TouchableOpacity activeOpacity={0.6}>

                        <TextCustom style={{color: 'darkblue'}} >
                            Click here to update or change your location
                        </TextCustom>

                    </TouchableOpacity>

                </View>

                <View style={{...styles.profileInfoCont, marginBottom: 30}}>
                    <TextCustom 
                    style={{paddingVertical: 20, color: Colors.primary, fontSize: 20}} >
                        private Information
                    </TextCustom>
                    
                    <View style={styles.profileInfo}>
                        <TextCustom style={styles.label}>Email</TextCustom>
                        <TextInput style={styles.textInput} 
                            placeholder="Enter Email"
                            onChangeText={text => setInput({...input, email: text})}
                            value={input.email} 
                        />
                    </View>

                    <View style={styles.profileInfo}>
                        <TextCustom style={styles.label}>Phone</TextCustom>
                        <TextInput style={styles.textInput} 
                            placeholder="Enter Phone number"
                            onChangeText={text => setInput({...input, phone: text})}
                            value={input.phone} 
                        />
                    </View>

                    <View style={styles.profileInfo}>
                        <TextCustom style={styles.label}>CNIC</TextCustom>
                        <TextInput style={styles.textInput} 
                            placeholder="Enter Your CNIC"
                            onChangeText={text => setInput({...input, cnic: text})}
                            value={input.cnic} 
                        />
                    </View>

                </View>

                <ButtonBox
                    text='Save'
                    style={{backgroundColor: Colors.primary, alignSelf: 'center', marginVertical: 20}}
                    styleText={{color: Colors.accent}}
                    onPress={()=> editUser()}
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
   profileImgCont :{
        alignItems: 'center',
        marginTop: 40,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: Colors.textAccent,
   },
   profileImg :{
       width: 80,
        height :80,
        borderRadius: 40,
   },
   label :{
       paddingTop: 10,
       color: Colors.primary
   },
   info :{
        marginHorizontal: 10
   },
   profileInfoCont :{
       borderBottomWidth: 1,
       borderBottomColor: Colors.textAccent,
       paddingBottom: 20,
   }, 
   profileInfo :{
        flexDirection: 'row', 
        justifyContent: 'space-between',
   },
   textInput :{
       width: '70%',
       padding: 4,
       color: Colors.primary,
       borderBottomWidth: 1,
       borderBottomColor: Colors.textAccent
   }
});

export default EditProfileScreen;