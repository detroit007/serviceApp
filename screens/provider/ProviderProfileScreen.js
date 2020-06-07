import React, { useState, useEffect } from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Dimensions, 
         StatusBar, 
         Image, 
         ScrollView, 
         TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

import firestore from '@react-native-firebase/firestore';

const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const ProviderProfileScreen = ({navigation}) => {

  const[postTaskData, setPostTaskData] = useState('');
      
    const getData = async() => {
      await firestore()
      .collection('Users')
      .doc('mwtzfoTsg2NEVI0awAjPLlseDpQ2')
      .get()
      .then(documentSnapshot => {      
        if (documentSnapshot.exists) {
          // userData.push(documentSnapshot.data());
          setPostTaskData(documentSnapshot.data());
        }
        // console.log("User Data: ", postTaskData);
      });
    }

    useEffect(()=> {
      getData();
    }, []);

    return (
        
      <View style={styles.container}>
          
          <ScrollView>
            <Image source={require('../../assets/img/default_male.png')} style={styles.imageStyle}/>
            <View style={styles.topWraper}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 32}}>
                    <TouchableOpacity activeOpacity={0.6} onPress={()=>{navigation.navigate('EditProfile')}}
                      style={{borderColor: Colors.colorAccent, borderWidth: 1, borderRadius: 120, padding: 12, minWidth: 100}}>
                        <Text style={styles.labelColor4}>Edit</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.labelColor3}>25</Text>
                        <Text style={styles.labelColor2}>Request Posted</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/img/default_male.png')} style={styles.imageStyle2}/>
                    <View>
                        <Text style={styles.labelColor}>{postTaskData.name}</Text>
                        <Text style={styles.labelColor2}>{postTaskData.profession}</Text>
                    </View>
                </View>
                
                
            </View>
            <View style={{...styles.wraper, marginBottom: 10}}>
                <Text style={styles.label3}>Bio</Text>
                <Text style={styles.label4}>{postTaskData.bio}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('ReviewScreen')}} >

                <View style={styles.bottomWraper}>
                    <Icon name="users" size={20} color={Colors.accent} style={{margin: 4}}/>
                    <View>
                        <Text style={styles.label}>30+</Text>
                        <Text style={styles.label}>Reviews</Text>
                    </View>
                </View>
                </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('ServiceHistory')}} >
                <View style={styles.bottomWraper}>
                    <Icon name="map-marker-alt" size={20} color={Colors.accent} style={{margin: 4}}/>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.label}>Location</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 1}}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('ServiceHistory')}} >
                <View style={styles.bottomWraper}>
                    <Icon name="clock" size={20} color={Colors.accent} style={{margin: 4}}/>
                    <View>
                        <Text style={styles.label}>Services</Text>
                        <Text style={styles.label}>History</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('ProviderSkills')}} >
                <View style={styles.bottomWraper}>
                    <Icon name="angle-double-right" size={20} color={Colors.accent} style={{margin: 4}}/>
                    <View>
                        <Text style={styles.label}>My</Text>
                        <Text style={styles.label}>Skills</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 1}}>
              <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('CustomerDraw')}} >
                <View style={styles.bottomWraper2}>
                    <Icon name="redo" size={20} color={Colors.accent} style={{margin: 4}}/>
                    <View>
                        <Text style={styles.label}>Switch to Customer</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>
            
          </ScrollView>
          
      </View>
      
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    backgroundColor: Colors.accent,
  },
  topWraper: {
    width: WIDTH * 0.95 ,
    padding: 12,
    position: 'absolute',
    height: 270,
    flexDirection: 'column-reverse',
    alignSelf: 'center'
  },
  wraper: {
    justifyContent: 'space-between',
    width: WIDTH ,
    paddingTop: 12,
    backgroundColor: Colors.accent,
    paddingLeft: 4
  },
  bottomWraper: {
    width: (WIDTH / 2) - 0.5,
    height: (HEIGHt / 2) / 3,
    backgroundColor: Colors.primary,
  },
  bottomWraper2: {
    width: WIDTH,
    height: 90,
    backgroundColor: Colors.primary,
  },
  imageStyle: {
    width: WIDTH, 
    height: (HEIGHt / 2),
    backgroundColor: 'black',
    opacity: 0.5,
    resizeMode: 'stretch',
  },
  imageStyle2: {
    width: 60, 
    height: 60, 
    resizeMode: 'center',
    borderRadius: 200,
    marginRight: 16
  },
  labelColor: {
    color: 'white',
    fontSize: 25,
  },
  labelColor2: {
    color: 'white',
    
  },
  labelColor3: {
    color: Colors.accent,
    textAlign: 'center',
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1
  },
  labelColor4: {
    color: Colors.accent,
    textAlign: 'center',
  },
  label: {
    color: Colors.accent,
    textAlign: 'center',
  },
  label2: {
    color: Colors.primary,
    fontSize: 11,
  },
  label3: {
    color: Colors.primary,
  },
  label4: {
    color: Colors.primary,
    textAlign: 'center',
    width: WIDTH * 0.89,
    alignSelf: 'center'
  }
});

export default ProviderProfileScreen;