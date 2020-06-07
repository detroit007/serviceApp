import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import ButtonBox from '../../components/ButtonBox';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const CustomerAddressScreen = ({navigation}) =>{

    return (
        
      <View style={styles.container}>
        {/* <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation={true}
          showsCompass={true}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          
        </MapView> */}
         <View style={styles.topBox}>
            <Text style={styles.labelColor}>House #12, block B, street #12</Text>
          </View>
          <View style={{position: 'absolute', marginTop: HEIGHt/2 + 80}}>
          <ButtonBox 
            style={{backgroundColor: Colors.primary, marginBottom: 12}}
            styleText={{color: Colors.accent}}
            text="Nearby Provider"
            onPress={()=> {navigation.navigate('NearbyProvider')}}
          />
          <ButtonBox 
            style={{backgroundColor: Colors.primary}}
            styleText={{color: Colors.accent}}
            text="Confirm Address"
            onPress={()=> {navigation.navigate('ReviewCustomerPost')}}
          />
          </View>
      </View>
      
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    backgroundColor: Colors.accent,
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
    color: Colors.primary,
  },
  labelColor2: {
    color: Colors.primary,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: -10,
    fontSize: 15
  },
  labelColor3: {
    color: Colors.primary,
    fontSize: 11
  },
  label: {
    color: Colors.colorPrimary,
    textAlign: 'center',
    // fontSize: 20
  },
  label2: {
    color: Colors.colorAccent,
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 22,
    fontSize: 12
  },
  label3: { 
    color: Colors.primary,
    fontWeight: 'bold'
  },
  label4: {
    color: Colors.primary,
    marginLeft: 20,
    marginTop: 12,
    marginBottom: 12
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  }
});
  
export default CustomerAddressScreen;