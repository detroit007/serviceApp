import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Colors from '../../constants/Colors';

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

import ProviderWorkHistoryCard from '../../components/ProviderWorkHistoryCard';


let userData = [];
const WorkHistoryScreen = () =>{

    const[check, setCheck] = useState(false);
    const[postTaskData, setPostTaskData] = useState('');
    const[utype, setUTupe] = useState('');
    const[uData, setUData] = useState('');
    const getData = async() =>{
      await firestore()
      .collection('Tasks')
      .where('uid', '==', uData)
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        
        if(querySnapshot.size < 1){
          setCheck(true);
        }
        else {
          setCheck(false);
          let i = 0;
          querySnapshot.forEach(documentSnapshot => {
            firestore()
            .collection('Users')
            .doc(documentSnapshot.data().uid)
            .get()
            .then(documentSnapshot1 => {
                if (documentSnapshot1.exists) {
                  userData.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                    user: documentSnapshot1.data(),
                  });
                  i++;
                  if(i == querySnapshot.size){
                    setPostTaskData(userData);
                  }
                }
            });
          });
        }
      });
    }

    const getAsyncData = async() =>{
      try {
        // const value = await AsyncStorage.getItem('async_check');
        let value2 = await AsyncStorage.getItem('async_user');
        // if(value !== null) {
        //   setUTupe(value);
        // }
        if(value2 !== null) {
        //   value2 = JSON.parse(value2);
          setUData(value2);
        }
      } catch(e) {
        console.log("Error2: ", e);
      }
    }

    useEffect(()=> {
      getAsyncData();
      getData();
    }, [uData, userData]);

    const renderItemHandler = (itemData) =>{
        return(
            <ProviderWorkHistoryCard
                service={itemData.item.service}
                source={require('../../assets/img/services/electrician.png')}
                budget={itemData.item.budget}
                person={itemData.item.person}
                name={itemData.item.user.name}               
                profession={itemData.item.user.profession}
                description={itemData.item.description}
                />
        )
    }

    return(
        <View style={styles.screen}>

            <FlatList
                data={postTaskData}
                renderItem={renderItemHandler}
                keyExtractor={(item, index)=>{index.toString()}}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        backgroundColor: Colors.accent
    },
    container :{
        margin: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
    },
    userinfo :{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    imageStyle: {
      width: 60, 
      height: 60, 
      resizeMode: 'center',
      borderRadius: 66
    },
    label :{
        color: Colors.primary,
    },
    btn :{
        backgroundColor: Colors.primary,
        padding: 10,
    }
});

export default WorkHistoryScreen;