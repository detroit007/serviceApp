import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions, StatusBar, Image, ScrollView, TouchableOpacity, Picker } from 'react-native';
import Colors from '../../constants/Colors';
import ButtonBox from '../../components/ButtonBox';
import { CheckBox } from 'react-native-elements'

const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const ProviderMakeOfferScreen = (props) =>{

    const [state, setState] = useState(false);
    const [input, setInput] = useState({offer:'', desc:''});


    function change_state(){
        setState(!state);
    }
    return (
        
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.wraper}>
            <Text style={styles.labelColor}>Your Offer</Text> 
            <TextInput 
                placeholder="Rs."
                style={{backgroundColor: 'white', borderWidth: 1, color: Colors.primary, borderColor: Colors.primaryLight, padding: 12,  marginTop: 12, marginBottom: 12, borderRadius: 4}}
                onChangeText={text => setInput({...input, offer: text})}
                value={input.offer}
            />
            <Text style={styles.labelColor}>Why are you the best person for this task?</Text>
            <TextInput 
                placeholder="Description"
                style={{backgroundColor: 'white', textAlignVertical: 'top', color: Colors.primary, borderWidth: 1, borderColor: Colors.primaryLight, padding: 12, marginTop: 12, marginBottom: 12, borderRadius: 4}}
                multiline={true}
                numberOfLines={7}
                onChangeText={text => setInput({...input, desc: text})}
                value={input.desc}
            />
            <Text style={styles.labelColor}>By making an offer in this task you are entering into an aggrement with the Customer to do this task at a fixed price of Rs....</Text>
            
            <View style={{flexDirection: 'row'}}>
            <CheckBox
                checked={state}
                containerStyle={{backgroundColor: Colors.accent, marginLeft: -10}}
                onPress={change_state}
            />
            <Text style={styles.labelColor2}>I Agree</Text> 
            </View>
            <ButtonBox 
                style={{backgroundColor: Colors.primary, width: WIDTH * 0.89}}
                styleText={{color: Colors.accent}}
                text="Done"
                onPress={()=> alert("this")}
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
    backgroundColor: Colors.accent,
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
    color: Colors.primary,
    textAlign: 'center',
    // fontSize: 20
  },
  label2: {
    color: Colors.accent,
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
  }
});
  
export default ProviderMakeOfferScreen;