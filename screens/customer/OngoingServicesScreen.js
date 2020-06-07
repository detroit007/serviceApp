import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Accordion from '../../components/Accordion';
import ButtonBox from '../../components/ButtonBox';

import AsyncStorage from '@react-native-community/async-storage';


import firestore from '@react-native-firebase/firestore';
import CacheImage from '../../components/CacheImage';


const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const OngoingServicesScreen = () =>{


    const[check, setCheck] = useState(false);

    const[postTaskData, setPostTaskData] = useState([]);
    let userData = [];
    const getData= async(id) => {
      await firestore()
      .collection('Tasks')
      .where('uid', '==', id)
      .get()
      .then(querySnapshot => {
        // console.log('Total users: ', querySnapshot.size);

        if(querySnapshot.size < 1){
          setCheck(true);
        }
        else {
          setCheck(false);
          // const userData = [];
          querySnapshot.forEach(documentSnapshot => {
            userData.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          setPostTaskData(userData);
        })
      }
//////
        // const userData = [];

        // querySnapshot.forEach(documentSnapshot => {
        //   userData.push({
        //     ...documentSnapshot.data(),
        //     key: documentSnapshot.id,
        //   });
        //   setPostTaskData(userData);

//////
          // setPostTaskData(documentSnapshot._data);
          
          // userData.push(documentSnapshot.data())
          //   let myArray = []
          // for(let i = 0; i < userData.length; i++){
          //     myArray.push(userData[i])
          // }
          // setPostTaskData(myArray);
          // console.log(postTaskData)
        
          // userData = dataArray

          // setCheck(true);
          // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    })
        // console.log(userData[0]);
      }

      const getAsyncData = async() => {
        try {
          let value = await AsyncStorage.getItem('async_user');
          if(value !== null) {
            // value = JSON.parse(value);
            getData(value);
            console.log(value)
          }
        } catch(e) {
          console.log("Error: ", e);
        }
      }
  
      useEffect(()=> {
        getAsyncData();
      }, []);
      
      const deleteTask =(docID, provider_id)=>{
        if(provider_id == null){
          firestore()
          .collection('Tasks')
          .doc(docID)
          .delete()
          .then(() => {
            getData();
            // NavigationPreloadManager.navigate("PostTaskScreen");
            alert("Deleted");
            
          });
        }
      }


    const renderDataHandler = (itemData) =>{
      return(
        <View style={styles.wraper}>
            <Text style={styles.labelColor}>Title</Text>
            <Text style={styles.label}>I need a {itemData.item.title}</Text>
            <View style={styles.middleWraper}>
                <View style={{alignItems: 'center'}}>
                    <Icon name="cogs" size={30} color={Colors.primary} style={{marginTop: 12, marginBottom: 6}}/>
                    <Text style={styles.label2}>Service Required</Text>
                    <Text style={styles.label3}>{itemData.item.service}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Icon name="coins" size={30} color={Colors.primary} style={{marginTop: 12, marginBottom: 6}}/>
                    <Text style={styles.label2}>Budget</Text>
                    <Text style={styles.label3}>Rs. {itemData.item.budget}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Icon name="users" size={30} color={Colors.primary} style={{marginTop: 12, marginBottom: 6}}/>
                    <Text style={styles.label2}>People Requested</Text>
                    <Text style={styles.label3}>{itemData.item.person}</Text>
                </View>
            </View>
            <Accordion 
                titleName='Description'
                descriptionFirst={itemData.item.description}
                stitleName='Address'
                descriptionSecond="house #12 near qamar Floor mills jalilabad Multan"
                addressVisiable="flex"
                taskVisiable="none"
            />
            <ButtonBox 
                style={{backgroundColor: Colors.primary, width: WIDTH * 0.89}}
                styleText={{color: Colors.accent}}
                text="View Offers"
                onPress={()=> alert("this")}
            />
          </View>
      )
    }

    return (
        
      <View style={styles.container}>
        
          {
              !check ? 
              <View style={{alignItems: 'center', height: HEIGHt, marginTop: 20}}>
              <CacheImage source={require('../../assets/img/services/empty.png')} style={styles.imageStyle}/>
              <Text style={styles.label}>No Ongoing Service Found</Text>
            </View> :
            <FlatList
              data={postTaskData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderDataHandler}
            />

          }

          {userData.map(val => <Text>{val['title']}</Text>)}
          
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
  wraper: {
    width: WIDTH * 0.95,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
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
    color: Colors.primary,
  },
  labelColor2: {
    color: Colors.primary,
  },
  labelColor3: {
    color: Colors.primary,
    fontSize: 11
  },
  label: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 20
  },
  label2: {
    color: Colors.primary,
    fontSize: 11,
  },
  label3: {
    color: Colors.primary,
    fontWeight: 'bold'
  },
  label4: {
    color: Colors.primary,
    marginLeft: 20,
    marginTop: 12,
    
  }
});
  
export default OngoingServicesScreen;