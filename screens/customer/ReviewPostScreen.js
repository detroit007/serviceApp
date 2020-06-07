import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Accordion from '../../components/Accordion';
import ButtonBox from '../../components/ButtonBox';

import firestore from '@react-native-firebase/firestore';


const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const ReviewPostScreen =({navigation},props)=> {

    const[check, setCheck] = useState(false);

      let docID = '';
        const[postTaskData, setPostTaskData] = useState('');
    
         const getData = async()=> {
          await firestore().
          collection('Tasks').
          where('uid', '==', 'enKqqutwDMgg8lVE5d0I').
          get().
          then(querySnapshot => {
            if(querySnapshot._docs.length > 0){
              setPostTaskData(querySnapshot._docs[0]._data);
              docID = querySnapshot._changes[0]._nativeData.doc.path.split('/');
            } else {
              console.log("Array is empty!");
            }
          });
        }
    
        useEffect(()=> {
          getData();
        }, []);
        
        const deleteTask =() =>{
          firestore()
          .collection('Tasks')
          .doc(docID[1])
          .delete()
          .then(() => {
            NavigationPreloadManager.navigate("PostTaskScreen");
          });
        }

        console.log(postTaskData);

    return (
        
      <View style={styles.container}>
          
            <ScrollView>
            <View style={styles.wraper}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.labelColor}>Title</Text>
                    <TouchableOpacity>
                        <Icon name="pencil-alt" size={15} color={Colors.colorPrimary} />
                    </TouchableOpacity>
                </View>
            
            <Text style={styles.label}>{postTaskData.title}</Text>
            <View style={styles.middleWraper}>
                <View style={{alignItems: 'center'}}>
                    <Icon name="cogs" size={30} color={Colors.colorPrimary} style={{marginTop: 12, marginBottom: 6}}/>
                    <Text style={styles.label2}>Service Required</Text>
                    <Text style={styles.label3}>{postTaskData.service}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Icon name="coins" size={30} color={Colors.colorPrimary} style={{marginTop: 12, marginBottom: 6}}/>
                    <Text style={styles.label2}>Budget</Text>
                    <Text style={styles.label3}>Rs. {postTaskData.budget}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Icon name="users" size={30} color={Colors.colorPrimary} style={{marginTop: 12, marginBottom: 6}}/>
                    <Text style={styles.label2}>People Requested</Text>
                    <Text style={styles.label3}>{postTaskData.person}</Text>
                </View>
            </View>
            <View>
            <Text style={styles.labelColor}>Description</Text>
            <Text style={styles.label4}>{postTaskData.description}</Text>
            <View style={{display: props.addressVisiable, marginTop: 12}}>
              <Text style={styles.labelColor}>Address</Text>
              <Text style={styles.label4}>Lahore, Street 2, Block A, Iqball Town</Text>
            </View>
          </View>
            <ButtonBox 
                style={{backgroundColor: Colors.colorPrimary, width: WIDTH * 0.89}}
                styleText={{color: Colors.colorAccent}}
                text="Get Offers"
                onPress={()=> {navigation.navigate('ViewOffers')}}
            />
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
    backgroundColor: Colors.colorAccent,
  },
  wraper: {
    width: WIDTH * 0.95,
    backgroundColor: 'white',
    padding: 12,
    marginBottom: 12,
    marginTop: 12
  },
  middleWraper: {
    flexDirection: 'row',
    width: WIDTH * 0.88,
    justifyContent: 'space-between',
    marginBottom: 16
  },
  bottomWraper: {
    flexDirection: 'row',
    width: WIDTH * 0.95,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 1,
    marginBottom: 12
  },
  imageStyle: {
    width: 300, 
    height: 300, 
    resizeMode: 'center',
    // borderRadius: 66,
    marginBottom: 20
  },
  labelColor: {
    color: Colors.colorPrimary,
  },
  labelColor2: {
    color: Colors.colorPrimary,
  },
  labelColor3: {
    color: Colors.colorPrimary,
    fontSize: 11
  },
  label: {
    color: Colors.colorPrimary,
    textAlign: 'center',
    fontSize: 20
  },
  label2: {
    color: Colors.colorPrimary,
    fontSize: 11,
  },
  label3: {
    color: Colors.colorPrimary,
    fontWeight: 'bold'
  },
  label4: {
    color: Colors.colorPrimary,
    marginLeft: 20,
    marginTop: 12,
    marginBottom: 12
  }
});
  
export default ReviewPostScreen;