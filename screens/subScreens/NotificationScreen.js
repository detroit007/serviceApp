import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, FlatList, Text, View, Dimensions, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import CacheImage from '../../components/CacheImage';
import AsyncStorage from '@react-native-community/async-storage';
import database from '@react-native-firebase/database';


const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const NotificationScreen = props=> {

    // const[check, setCheck] = useState(false);
    // const[postTaskData, setPostTaskData] = useState('');

    // const getData =(id) =>{
    //   const userData = [];
    //   database()
    //   .ref('/notification/'+id)
    //   .on('child_added', snapshot => {
    //     userData.push({
    //       ...snapshot.val(),
    //     });
    //     setPostTaskData(userData);
    //     console.log("data: ", snapshot);
    //   });
    // }

    // const getAsyncData =async( ) =>{
    //   try {
    //     let value = await AsyncStorage.getItem('async_user');
    //     if(value !== null) {
    //       value = JSON.parse(value);
    //       getData(value.uid);
    //     }
    //   } catch(e) {
    //     console.log("Error: ", e);
    //   }
    // }

    // const updateNoti =(id)=>{
    //   database()
    //   .ref('/notification/'+id)
    //   .update({
    //     status: 1,
    //   })
    //   .then(() => console.log('Data updated.'));
    // }
    // useEffect(()=> {
    //   getAsyncData();
    // }, []);

    // const itemView =(itemData)=>{ 
    //   var timestamp = itemData.item.created_at;
    //   var curTimstamp = new Date().getTime();
    //   var theDate = curTimstamp - timestamp;
    //   var elapsed = '';
    //   theDate /=1000;
    //   elapsed =  Math.round(theDate) +" sec ago";
    //   if(theDate >= 60){
    //     theDate /= 60;
    //     elapsed =  Math.round(theDate) +" minute ago";
    //     if(theDate >= 60){
    //       theDate /= 60;
    //       elapsed =  Math.round(theDate) +" hour ago";
    //     }
    //   }
    //   var show = 'flex';
    //   if(itemData.item.status == 1){
    //     show = 'none';
    //   }
    //   return(
    //     <View style={styles.wraper}>
    //       <Image source={require('../../assets/img/default_male.png')} style={styles.imageStyle2} />
    //       <View style={{marginLeft: 10,}}>
    //         <Text style={styles.labelColor} ellipsizeMode='tail' numberOfLines={3}>
    //           {itemData.item.txt}
    //         </Text>
    //       </View>
    //       <View style={{flexDirection: 'row-reverse', width: WIDTH * 0.22}}>
    //         <View>
    //           <View style={{alignItems: 'center', marginBottom: 8}}>
    //           <Text style={[styles.labelColor2, {display: show}]}>New</Text>
    //           </View>
    //           <Text style={styles.labelColor3}>{elapsed}</Text>
    //         </View>
    //       </View>
    //     </View>
    //   );
    // }

    const[check, setCheck] = useState(false);
    const[postTaskData, setPostTaskData] = useState('');

    const getData=(id)=> {
      const userData = [];
      
      database()
      .ref('/notification/'+id)
      .on('child_added', snapshot => {
        userData.push({
          ...snapshot.val(),
        });

        setPostTaskData(userData);
        console.log("data: ", snapshot);
      });
    }

    const getAsyncData =async()=> {
      try {
        let value = await AsyncStorage.getItem('async_user');
        if(value !== null) {
          // value = JSON.parse(value);
          getData(value);
          // updateNoti(value)
        }
      } catch(e) {
        console.log("Error: ", e);
      }
    }

    const updateNoti=(id)=>{
      database()
      .ref('/notification/'+id)
      .update({
        status: 1,
      })
      .then(() => console.log('Data updated.'));
    }
    useEffect(()=> {
      getAsyncData();
      return ()=>{
        updateNoti();
      }
    }, []);
    let elapsed = '';
    function itemView(itemData){ 
      let timestamp = itemData.item.created_at;
      let curTimstamp = new Date().getTime();
      let theDate = curTimstamp - timestamp;
      
      theDate /=1000;
      elapsed =  Math.round(theDate) +" sec ago";
      if(theDate >= 60){
        theDate /= 60;
        elapsed =  Math.round(theDate) +" minute ago";
        if(theDate >= 60){
          theDate /= 60;
          elapsed =  Math.round(theDate) +" hour ago";
        }
      }
      let show = 'flex';
      if(itemData.item.status == 1){
        show = 'none';
      }
      return(
        <View style={styles.wraper}>
          <Image source={require('../../assets/img/default_male.png')} style={styles.imageStyle2} />
          <View style={{marginLeft: 10,}}>
            <Text style={styles.labelColor} ellipsizeMode='tail' numberOfLines={3}>
              {itemData.item.txt}
            </Text>
          </View>
          <View style={{flexDirection: 'row-reverse', width: WIDTH * 0.22}}>
            <View>
              <View style={{alignItems: 'center', marginBottom: 8}}>
              <Text style={[styles.labelColor2, {display: show}]}>New</Text>
              </View>
              <Text style={styles.labelColor3}>{elapsed}</Text>
            </View>
          </View>
        </View>
      );
    }

    {console.log(postTaskData)}

    return (
        
      <View style={styles.container}>
          
          {
              check ? 
              <View style={{alignItems: 'center', height: HEIGHt, marginTop: 20}}>
              <CacheImage source={require('../../assets/img/notification/empty-inbox-notifi.png')} style={styles.imageStyle}/>
              <Text style={styles.label}>No New Notification</Text>
            </View> :
          //   <ScrollView>
          //   <View style={styles.wraper}>
          //       <CacheImage source={require('../../assets/img/notification/empty-inbox-notifi.png')} style={styles.imageStyle2} />
          //       <View style={{marginLeft: 10,}}>
          //           <Text style={styles.labelColor} ellipsizeMode='tail' numberOfLines={3}>You accepted the tim offer for the service of cook</Text>
          //       </View>
          //       <View style={{flexDirection: 'row-reverse', width: WIDTH * 0.22}}>
          //           <View>
          //               <View style={{alignItems: 'center', marginBottom: 8}}>
          //               <Text style={styles.labelColor2}>New</Text>
          //               </View>
          //               <Text style={styles.labelColor3}>52 minutes ago</Text>
          //           </View>
          //       </View>
          //   </View>
            
          // </ScrollView>
          <FlatList
              data={postTaskData}
              renderItem={itemView}
              keyExtractor={(key,index)=> key = index.toString()}
            />
          }
          
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
    flexDirection: 'row',
    width: WIDTH * 0.95,
    backgroundColor: 'white',
    padding: 12,
    marginBottom: 12,
    marginTop: 12,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
    borderRadius: 4
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
    borderRadius: 66,
  },
  imageStyle2: {
    width: 60, 
    height: 60, 
    resizeMode: 'center',
    borderRadius: 150,
  },
  labelColor: {
    color: Colors.primary,
    width: 170,
    fontSize: 15,
  },
  labelColor2: {
    backgroundColor: Colors.primary,
    color: Colors.accent,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 40
  },
  labelColor3: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center'
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
  
export default NotificationScreen;