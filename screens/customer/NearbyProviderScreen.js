// import React, { useState } from 'react';
// import { StyleSheet, TextInput, Text, View, Dimensions, StatusBar, Image, ScrollView, TouchableOpacity, Picker } from 'react-native';
// import Colors from '../../constants/Colors';
// import ButtonBox from '../../components/ButtonBox';
// import CardBox from '../../components/CardBox';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


// import AsyncStorage from '@react-native-community/async-storage';
// import database from '@react-native-firebase/database';
// import firestore from '@react-native-firebase/firestore';

// const WIDTH = Dimensions.get('window').width;
// const HEIGHt = Dimensions.get('window').height;

// const NearbyProviderScreen = (props) =>{

//   function updateTask() {
//     firestore()
//     .collection('Tasks')
//     .doc(item)
//     .update({
//       address: 'House #12, block B, street #12'
//     })
//     .then(() => {
//       console.log('User updated!');
//       navigation.navigate("ReviewPostScreen", { item: item });
//     });
//   }

//     return (
        
//       <View style={styles.container}>
//         <MapView
//           provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//           style={styles.map}
//           showsUserLocation={true}
//           showsCompass={true}
//           region={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.015,
//             longitudeDelta: 0.0121,
//           }}
//         >
//         </MapView>
//          <View style={styles.topBox}>
//             <Text style={styles.labelColor}>House #12, block B, street #12</Text>
//           </View>
//           <ScrollView>
//           <TouchableOpacity onPress={()=> {alert("Contact Provider")}}>
//           <CardBox 
//             name="Nawaz Sharif"
//             type="plumber"
//             rate="none"
//             badge="flex"
//             badgeText="Verified Provider"
//             ratingVal={5}
//             jobsDisplay="none"
//             jobsVal={22}
//             display="none"
//             distance="flex"
//             distanceVal="0.3"/>
//             </TouchableOpacity>
            
//           </ScrollView>
//           <View style={{position: 'absolute', marginTop: HEIGHt/2 + 150}}>
//           </View>
//       </View>
      
//     );
//   };
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 0,
//     backgroundColor: Colors.colorAccent,
//     justifyContent: 'space-between'
//   },
//   topBox: {
//     backgroundColor: 'white', 
//     width: WIDTH * 0.95, 
//     padding: 12, 
//     margin: 12, 
//     position: 'absolute', 
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,  
//     elevation: 5
//   },
//   wraper: {
//     width: WIDTH * 0.95,
//     padding: 12,
//     marginBottom: 12,
//     marginTop: 12
//   },
//   middleWraper: {
//     flexDirection: 'row',
//     width: WIDTH * 0.88,
//     justifyContent: 'space-between', 
//     marginBottom: 16
//   },
//   bottomWraper: {
//     flexDirection: 'row',
//     width: WIDTH * 0.95,
//     backgroundColor: 'white',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,  
//     elevation: 1,
//     marginBottom: 12
//   },
//   imageStyle: {
//     width: 300, 
//     height: 300, 
//     resizeMode: 'center',
//     // borderRadius: 66,
//     marginBottom: 20
//   },
//   labelColor: {
//     color: Colors.colorPrimary,
//   },
//   labelColor2: {
//     color: Colors.colorPrimary,
//     alignSelf: 'center',
//     fontWeight: 'bold',
//     marginLeft: -10,
//     fontSize: 15
//   },
//   labelColor3: {
//     color: Colors.colorPrimary,
//     fontSize: 11
//   },
//   label: {
//     color: Colors.colorPrimary,
//     textAlign: 'center',
//     // fontSize: 20
//   },
//   label2: {
//     color: Colors.colorAccent,
//     backgroundColor: Colors.colorPrimary,
//     padding: 8,
//     borderRadius: 22,
//     fontSize: 12
//   },
//   label3: { 
//     color: Colors.colorPrimary,
//     fontWeight: 'bold'
//   },
//   label4: {
//     color: Colors.colorPrimary,
//     marginLeft: 20,
//     marginTop: 12,
//     marginBottom: 12
//   },
//   map: {
//     height: HEIGHt / 2,
//     width: WIDTH,
//   }
// });
  
// export default NearbyProviderScreen;

import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions, StatusBar, Image, ScrollView, TouchableOpacity, Picker } from 'react-native';
import Colors from '../../constants/Colors';
import ButtonBox from '../../components/ButtonBox';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';
import firestore from '@react-native-firebase/firestore';

const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 30.208094;
const LONGITUDE = 71.516311;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let marker;
function NearbyProviderScreen({ route, navigation }) {

  // const { item } = route.params;

  const [coordinate, setCoordinate] = useState({cdt: new AnimatedRegion({
    latitude: LATITUDE,
    longitude: LONGITUDE,
  })})

  // const [latitude, setLatitude] = useState(LATITUDE);
  // const [longitude, setLongitude] = useState(LONGITUDE);

  const animate = () =>{
    
    const newCoordinate = {
      latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
      longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
    };

    if (Platform.OS === 'android') {
      if (marker) {
        marker._component.animateMarkerToCoordinate(newCoordinate, 500);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  }

  function updateTask() {
    firestore()
    .collection('Tasks')
    .doc(item)
    .update({
      address: 'House #12, block B, street #12'
    })
    .then(() => {
      console.log('User updated!');
      navigation.navigate("ReviewPostScreen");

      // navigation.navigate("ReviewPostScreen", { item: item });
    });
  }
    return (
        
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.colorPrimaryDark} />
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          showsCompass={true}
          region={{
            latitude: 30.208094,
            longitude: 71.516311,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            ref={marker => {
              marker = marker;
            }}
            coordinate={coordinate}
          />
          
        </MapView>
         <View style={styles.topBox}>
            <Text style={styles.labelColor}>House #12, block B, street #12</Text>
          </View>
          <View style={{position: 'absolute', marginTop: HEIGHt/2 + 80}}>
          <ButtonBox 
            style={{backgroundColor: Colors.colorPrimary, marginBottom: 12}}
            styleText={{color: Colors.colorAccent}}
            text="Nearby Provider"
            display="none"
            onPress={()=> alert("this")}
          />
          <ButtonBox 
            style={{backgroundColor: Colors.colorPrimary}}
            styleText={{color: Colors.colorAccent}}
            text="Confirm Address"
            display="none"
            onPress={updateTask}
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
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  }
});
  
export default NearbyProviderScreen;
