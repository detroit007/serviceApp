import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions, TouchableOpacity, Picker, ScrollView, Alert } from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonBox from '../../components/ButtonBox';

import firestore from '@react-native-firebase/firestore';

const WIDTH = Dimensions.get('window').width;
const HEIGHt = Dimensions.get('window').height;

const CustomerPostTask = ({navigation}) => {

    const [selectedValue, setSelectedValue] = useState("");
    const [colorValue, setColorValue] = useState(Colors.primary);
    const [colorValue2, setColorValue2] = useState(Colors.accent);
    const [colorValue3, setColorValue3] = useState(Colors.accentLight);
    const [colorValue4, setColorValue4] = useState(Colors.primary);
    const [Val, setVal] = useState('flex');
    const [Val2, setVal2] = useState('none');


    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [people, setPeople] = useState('')
    const [budget, setBudget] = useState('')

    const change_state = (num) =>{
        if(num == 1){
            setColorValue(Colors.primary);
            setColorValue2(Colors.accent);
            setColorValue3(Colors.accentLight);
            setColorValue4(Colors.primary);
            setVal('flex');
            setVal2('none');
        }
        else if(num == 2){
            setColorValue(Colors.accentLight);
            setColorValue2(Colors.primary);
            setColorValue3(Colors.primary);
            setColorValue4(Colors.accent);
            setVal('none');
            setVal2('flex');
        }
    }

    const  postTask = (title, desc, people, budget)=>{
      let service;
      if(selectedValue == '1') {
        service = 'Plumber';
      } else if(selectedValue == '2'){
        service = 'Electrician';
      } else if(selectedValue == '3'){
        service = 'Photographer';
      } else if(selectedValue == '4'){
        service = 'Tailor';
      } else if(selectedValue == '5'){
        service = 'Cleaner';
      } else if(selectedValue == '6'){
        service = 'Handyman';
      } 
      firestore()
      .collection('Tasks')
      .add({
          uid: 'enKqqutwDMgg8lVE5d0I',
          service: service,
          title: title,
          description: desc,
          person: people,
          budget: budget,
          address: 'street #12, house #12',
          provider_id: null,
          task_complete: false
      })
      .then((result) => {
          console.log(result);
          console.log('Task Posted!');
          Alert.alert(
            'Alert!',
            'Task posted successfully!',
            [
              { text: "OK",
               onPress: () => {
                // navigation.navigate('CustomerAddress')
                navigation.navigate('ReviewCustomerPost')
                } }
            ],
            { cancelable: false }
          );
      });
    }




    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.wraper}> 
            <Text style={styles.labelColor}>Service Required</Text> 
            <Picker
                mode="dropdown"
                selectedValue={selectedValue}
                style={{ height: 50, color: Colors.primary, backgroundColor: 'white', marginTop: 12, marginBottom: 12}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="-- Select --" value="0" />
                <Picker.Item label="Plumber" value="1" />
                <Picker.Item label="Electrician" value="2" />
                <Picker.Item label="Photographer" value="3" />
                <Picker.Item label="Tailor" value="4" />
                <Picker.Item label="Cleaner" value="5" />
                <Picker.Item label="Handyman" value="6" />

            </Picker>
            <Text style={styles.labelColor}>Title</Text> 
            <TextInput 
                placeholder="Title"
                style={{backgroundColor: 'white', borderWidth: 1, color: Colors.primary, borderColor: Colors.primary, padding: 12,  marginTop: 12, marginBottom: 12, borderRadius: 4}}
                onChangeText={text=> setTitle(text)}
            />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{backgroundColor: colorValue, width: 60, padding: 8}} onPress={()=> change_state(1)}>
                    <Text style={{textAlign: 'center', color: colorValue2}}>Text</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: colorValue3, width: 60, padding: 8}} onPress={()=> change_state(2)}>
                    <Text style={{textAlign: 'center', color: colorValue4}}>Audio</Text>
                </TouchableOpacity>
            </View>
            <TextInput 
                placeholder="Description"
                style={{display: Val, backgroundColor: 'white', textAlignVertical: 'top', color: Colors.primary, borderWidth: 1, borderColor: Colors.primary, padding: 12, marginBottom: 12, borderRadius: 4}}
                multiline={true}
                onChangeText={text=> setDesc(text)}
                numberOfLines={7}
            />
            <View style={{display: Val2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderWidth: 1, borderColor: Colors.primaryLight, padding: 12, marginBottom: 12, borderRadius: 4, height: HEIGHt / 4}}>
                <Text style={styles.label}>Press Audio button to record</Text>
                <TouchableOpacity>
                    <Icon name="microphone-alt" size={60} color={Colors.primary} style={{margin: 12}}/>
                </TouchableOpacity>
                <Text style={styles.label2}>Press to record audio</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View>
                <Text style={styles.labelColor}>No. of people Described</Text> 
                <TextInput 
                    placeholder="Ex. 1"
                    style={{backgroundColor: 'white', borderWidth: 1, color: Colors.primary, borderColor: Colors.primary, padding: 12,  marginTop: 12, marginBottom: 12, borderRadius: 4, width: WIDTH * 0.45}}
                    keyboardType='numeric'
                    value={people}
                    onChangeText={text=> setPeople(text)}
                />
                </View>
                <View style={{marginLeft: 12}}>
                <Text style={styles.labelColor}>Your Budget</Text> 
                <TextInput 
                    placeholder="Ex. 1"
                    style={{backgroundColor: 'white', borderWidth: 1, color: Colors.primary, borderColor: Colors.colorLight, padding: 12,  marginTop: 12, marginBottom: 12, borderRadius: 4, width: WIDTH * 0.40}}
                    keyboardType='numeric'
                    onChangeText={text=> setBudget(text)}
                />
                </View>
            </View>
            <ButtonBox 
              style={{backgroundColor: Colors.primary, width: WIDTH * 0.89}}
              styleText={{color: Colors.accent}}
              text="Next"
              onPress={()=> {
                postTask(title, desc, people, budget)
                // navigation.navigate('CustomerAddress')
              }}
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
    backgroundColor: Colors.accent,
  },
  wraper: {
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
  
export default CustomerPostTask;