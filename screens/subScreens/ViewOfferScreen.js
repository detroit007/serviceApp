import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Image, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardBox from '../../components/CardBox';

import firestore from '@react-native-firebase/firestore';


const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const ViewOfferScreen = ()=> {

  const[postTaskData, setPostTaskData] = useState('');

  const getData = async()=> {
    await firestore()
    .collection('Tasks')
    .where('uid', '==', 'enKqqutwDMgg8lVE5d0I')
    .get()
    .then(querySnapshot => {
      if(querySnapshot._docs.length > 0){
        setPostTaskData(querySnapshot._docs[0]._data);
      } else {
        console.log("Array is empty!");
      }
    });
  }

  useEffect(()=> {
    getData();
  }, []);

    return (
        
      <View style={styles.container}>
          <ScrollView>
          <View style={styles.wraper}>
            <Text style={styles.labelColor}>Title</Text>
            <Text style={styles.label}>{postTaskData.title}</Text>
            <View style={styles.middleWraper}>
                <View style={{alignItems: 'center'}}>
                    <Icon name="cogs" size={30} color={Colors.accent} style={{marginTop: 12, marginBottom: 6}}/>
                    <Text style={styles.label2}>Service Required</Text>
                    <Text style={styles.label3}>{postTaskData.service}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Icon name="coins" size={30} color={Colors.accent} style={{marginTop: 12, marginBottom: 6}}/>
                    <Text style={styles.label2}>Budget</Text>
                    <Text style={styles.label3}>Rs. {postTaskData.budget}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Icon name="users" size={30} color={Colors.accent} style={{marginTop: 12, marginBottom: 6}}/>
                    <Text style={styles.label2}>People Requested</Text>
                    <Text style={styles.label3}>{postTaskData.person}</Text>
                </View>
            </View>
            <Text style={styles.labelColor}>Desciption</Text>
            <Text style={styles.label4}>
            {postTaskData.description}
              </Text>
          </View>
          {/* <CardBox 
            name="Nawaz Sharif"
            type="plumber"
            price="120"
            ratingVal={5}
            jobsVal={22}
            description="describes how to align children along the cross axis of their container. Align items is very similar to justifyContent but instead of applying to the main axis, alignItems applies to the cross axis."/> */}
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
  wraper: {
    width: WIDTH * 0.95,
    backgroundColor: Colors.primary,
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
    width: 60, 
    height: 60, 
    resizeMode: 'center',
    borderRadius: 66
  },
  labelColor: {
    color: Colors.accent,
  },
  labelColor2: {
    color: Colors.primary,
  },
  labelColor3: {
    color: Colors.primary,
    fontSize: 11
  },
  label: {
    color: Colors.accent,
    textAlign: 'center',
    fontSize: 20
  },
  label2: {
    color: Colors.accent,
    fontSize: 11,
  },
  label3: {
    color: Colors.accent,
    fontWeight: 'bold'
  },
  label4: {
    color: Colors.accent,
    marginLeft: 20,
    marginTop: 12,
    
  }
});
  
export default ViewOfferScreen;