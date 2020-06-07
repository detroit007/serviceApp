import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions, StatusBar, Image, ScrollView, TouchableOpacity, Picker } from 'react-native';
import Colors from '../../constants/Colors';
import Accordion from '../../components/Accordion';
import CardBox from '../../components/CardBox';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const ReviewScreen = (props) => {

    return (
        
      <View style={styles.container}>
            
          <CardBox 
            name="Nawaz Sharif"
            type="plumber"
            rate="none"
            badge="none"
            ratingVal={5}
            jobsDisplay="none"
            jobsVal={22}
            display="none"
            distance="none"
            description='I need professional Photographer'
            />

      </View>
      
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    backgroundColor: Colors.colorAccent,
    justifyContent: 'space-between'
  },
  topBox: {
    backgroundColor: 'white', 
    width: WIDTH * 0.95, 
    padding: 12, 
    margin: 12, 
    position: 'absolute', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  wraper: {
    width: WIDTH * 0.95,
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
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: -10,
    fontSize: 15
  },
  labelColor3: {
    color: Colors.colorPrimary,
    fontSize: 11
  },
  label: {
    color: Colors.colorPrimary,
    textAlign: 'center',
    // fontSize: 20
  },
  label2: {
    color: Colors.colorAccent,
    backgroundColor: Colors.colorPrimary,
    padding: 8,
    borderRadius: 22,
    fontSize: 12
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
  },
  map: {
    height: HEIGHt / 2,
    width: WIDTH,
  }
});
  
export default ReviewScreen;