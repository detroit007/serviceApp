import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Colors from '../../constants/Colors';
import ButtonBox from '../../components/ButtonBox';
import CacheImage from '../../components/CacheImage';

const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;
const ProviderStartSlider = ({navigation}) => {

    const[tap, setTap] = useState(0);

    function tapCount(){
        if(tap == 0){
            setTap(tap + 1);
        } else if(tap == 1) {
            setTap(tap + 1);
        } else if(tap == 2){
            setTap(0);
        }
        
    }

    return (
        
      <View style={styles.container}>
          
          <StatusBar backgroundColor={Colors.colorPrimaryDark} />
            { tap == 0 ? 
            <TouchableWithoutFeedback onPress={() => tapCount()}>
            <View style={{alignItems: 'center'}}>
              <CacheImage source={require('../../assets/img/slider/neverMiss.png')} style={styles.imageStyle}/>
              <Text style={styles.label}>Never Miss an Opportunity</Text>
              <Text style={styles.label2}>Easily find work, chat and</Text>
              <Text style={styles.label2}>collaborate on the Go</Text>
              <View style={{flexDirection: 'row'}}>
              <View style={{width: 12, height: 12, backgroundColor: Colors.primary, borderRadius: 12, marginTop: 30}} />
              <View style={{width: 12, height: 12, backgroundColor: Colors.primaryLight, borderRadius: 12, marginTop: 30, marginLeft: 6}} />
              <View style={{width: 12, height: 12, backgroundColor: Colors.primaryLight, borderRadius: 12, marginTop: 30, marginLeft: 6}} />
              </View>
            </View>
            </TouchableWithoutFeedback> :
            tap == 1 ?
            <TouchableWithoutFeedback onPress={() => tapCount()}>
            <View style={{alignItems: 'center'}} >
              <CacheImage source={require('../../assets/img/slider/Hire_1.png')} style={styles.imageStyle}/>
              <Text style={styles.label}>Find interesting Tasks</Text>
              <Text style={styles.label2}>Stand out by replying to the clients</Text>
              <Text style={styles.label2}>quickly and getting to work</Text>
              <View style={{flexDirection: 'row'}}>
              <View style={{width: 12, height: 12, backgroundColor: Colors.primaryLight, borderRadius: 12, marginTop: 30}} />
              <View style={{width: 12, height: 12, backgroundColor: Colors.primary, borderRadius: 12, marginTop: 30, marginLeft: 6}} />
              <View style={{width: 12, height: 12, backgroundColor: Colors.primaryLight, borderRadius: 12, marginTop: 30, marginLeft: 6}} />
              </View>
            </View> 
            </TouchableWithoutFeedback> :
            <TouchableWithoutFeedback onPress={() => tapCount()}>
            <View style={{alignItems: 'center'}} >
              <CacheImage source={require('../../assets/img/slider/getpay.png')} style={styles.imageStyle}/>
              <Text style={styles.label}>Recieve Payments Easily</Text>
              <Text style={styles.label2}>Get paid only for what you</Text>
              <Text style={styles.label2}>have worked for</Text>
              <View style={{flexDirection: 'row'}}>
              <View style={{width: 12, height: 12, backgroundColor: Colors.primaryLight, borderRadius: 12, marginTop: 30}} />
              <View style={{width: 12, height: 12, backgroundColor: Colors.primaryLight, borderRadius: 12, marginTop: 30, marginLeft: 6}} />
              <View style={{width: 12, height: 12, backgroundColor: Colors.primary, borderRadius: 12, marginTop: 30, marginLeft: 6}} />
            </View>
          </View>
          </TouchableWithoutFeedback>
            }
            <ButtonBox 
                style={{backgroundColor: Colors.primary, marginTop: HEIGHt - 550}}
                styleText={{color: Colors.accent}}
                text="GET STARTED"
                onPress={()=> {navigation.navigate('ProviderStack')}}
            />
      </View>
      
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.accent,
  },
  imageStyle: {
    width: 300, 
    height: 300, 
    resizeMode: 'center',
    marginBottom: -10
  },
  label: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  label2: {
    color: Colors.primary,
    fontSize: 15,
    textAlign: 'center',
  },
});
  
export default ProviderStartSlider;