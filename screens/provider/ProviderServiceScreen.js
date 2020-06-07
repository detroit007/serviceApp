import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import TextCustom from '../../components/TextCustom';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../constants/Colors';
import ProviderJobCard from '../../components/ProviderJobCard';
import ProviderFilter from '../../models/ProvideFilter';

import firestore from '@react-native-firebase/firestore';

let userData = [];
const ProviderServicesScreen = ({navigation}) =>{

    const [modalVisible, setModalVisible] = useState(false);

    const[check, setCheck] = useState(false);
    const[postTaskData, setPostTaskData] = useState('');
    const[input, setInput] = useState({search: ''});

    const getOffers =(value)=>{
      setPostTaskData('');
      setInput({...input, search: ''});
      // userData = [];
      let service = ['Photographer', 'Electrician'];
      if(value){
        
        setInput({...input, search: value});
        service = [value, 'none'];
        // alert(value);
      }
      
      firestore()
      .collection('Tasks')
      .where('service', 'in', service)
      .get()
      .then(querySnapshot => {
        // console.log('Total users: ', querySnapshot.size);
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
                  checkBids(documentSnapshot.id, 'mwtzfoTsg2NEVI0awAjPLlseDpQ2')
                  .then(response => {
                    merge(documentSnapshot.data(), documentSnapshot1.data(), response);
                    i++;
                    if(i == querySnapshot.size){
                      setPostTaskData(userData);
                    }
                  });
                }
            });
          });
        }
      });
    }

    const checkBids = async(tid, userid)=>{
      let value = false;
      await firestore()
      .collection('Offers')
      .where('task_id', '==', tid)
      .where('uid', '==', userid)
      .get()
      .then(querySnapshot => {
        if(querySnapshot.size > 0){
          querySnapshot.forEach(documentSnapshot => {
            value = documentSnapshot.data().status;
          });
        }
      });
      return value;
    }

    const merge =(offers, user, bid) =>{
      userData.push({
        ...offers,
        key: offers.id, 
        user: user,
        bid: bid
      });      
    }

    useEffect(()=> {
      getOffers();
    }, []);
    
    
    const renderItemHandler = (itemData) =>{
      return(
        <ProviderJobCard 
        style={{marginBottom: 10}}
        name= {itemData.item.user.name}
        address = {itemData.item.address}
        time = '24 minutes ago'
        service = {itemData.item.service}
        budget = {itemData.item.budget}
        people = {itemData.item.person}
        title={itemData.item.service}
        description={itemData.item.description}
        onPress={()=>navigation.navigate('ProviderMakeOffer')}
    />
      )
    }

  return(
    <View style={styles.screen}>

            <TextCustom style={styles.headTitle}>
                Choose the service you would like to receive
            </TextCustom>

        <View style={styles.searchBarCont}>
            <TextInput 
                style={styles.searchBar} 
                placeholder='serach for a service' 
                placeholderTextColor={Colors.primaryLight}
            />

            <TouchableOpacity activeOpacity={0.6} onPress={()=>{setModalVisible(!modalVisible)}}>
                <Icon name='sliders-h' style={{paddingTop: 25}} size={22} color={Colors.primary} />
            </TouchableOpacity>
        </View>

        <FlatList
          data={postTaskData}
          renderItem={renderItemHandler}
          keyExtractor={(key, index)=> key = index.toString() }
        />

            <ProviderFilter 
                visible={modalVisible}
                cancelModal={()=>{setModalVisible(!modalVisible)}}
                onCancel={()=>{setModalVisible(!modalVisible)}}
                onSubmit={()=>{setModalVisible(!modalVisible)}}
            />
        
    </View>
  );
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        padding: 20,
        // backgroundColor :Colors.accent,
    },
    headerBar :{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    serviceRowOne :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    headTitle :{
        color: Colors.primary,
    },
    searchBarCont :{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchBar :{
        marginVertical: 10,
        marginHorizontal: -10,
        width: '93%',
        borderRadius: 50,
        backgroundColor: 'white',
        color: Colors.primary,
        paddingLeft: 10,
    },
    
})

export default ProviderServicesScreen;