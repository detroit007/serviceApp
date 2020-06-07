import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import ButtonBox from './ButtonBox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Rating } from 'react-native-elements';

const WIDTH = Dimensions.get('window').width;

const CardBox = props =>{

  const[expand, setExpand] = useState(false);
  const[val, setVal] = useState('none');
  const[icon, setIcon] = useState('sort-up');
  const[margin, setMargin] = useState(1);
  const[text, setText] = useState('more');

  const handlePress = () => {
    if(expand) {
      setVal('none');
      setIcon('sort-up');
      setMargin(1);
      setText('more');
    } else {
      setVal('flex');
      setIcon('sort-down');
      setMargin(-7);
      setText('less');
    }
    setExpand(!expand);
  }

  function ratingCompleted(rating) {
    alert("Rating is: " + rating);
  }

    return (
      <View style={styles.container}>
          <View style={styles.wraper}>
            <View style={{flexDirection: 'row'}}>
            <Image source={require('../assets/img/default_male.png')} style={styles.imageStyle} />
            <View style={{marginLeft: 10}}>
                <Text style={styles.labelColor}>{props.name}</Text>
                <Text style={styles.labelColor2}>{props.type}</Text>
                <View style={{flexDirection: 'row', marginTop: 6}}>
                    <Icon name="coins" size={13} color={Colors.primary} style={{marginTop: 2, marginRight: 6}}/>
                    <Text style={styles.labelColor}>Rs.{props.price}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row-reverse', width: WIDTH * 0.45}}>
            <View>
                <Text style={styles.labelColor3}>Reviews</Text>
                <Rating
                  readonly
                  imageSize={14}
                  startingValue={props.ratingVal}
                  style={{ paddingVertical: 5 }}
                />
                <Text style={styles.labelColor3}>({props.jobsVal})</Text>
            </View>
            </View>
          </View>
          <TouchableOpacity onPress={handlePress} style={{flexDirection: 'row-reverse'}}>
            <Icon name={icon} size={20} color={Colors.primary} style={{marginTop: margin }}/>
            <Text style={{fontSize: 11, marginRight: 8, color: Colors.primary}}>show {text}</Text>
          </TouchableOpacity>
          <View style={{display: val}}>
            <Text style={styles.labelColor3}>({props.jobsVal})</Text>
            <Text style={styles.labelColor3}>Jobs completed</Text>
            <Text style={styles.labelColor}>My Offer</Text>
            <Text style={styles.label}>{props.description}</Text>
            <ButtonBox 
              style={{backgroundColor: Colors.primary, marginLeft: 12, marginTop: 12}}
              styleText={{color: Colors.accent}}
              text="Accept Offer"
              onPress={()=> alert("this")}
            />
            </View>
          </View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: Colors.accent,
  },
  wraper: {
    width: WIDTH * 0.95,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 1,
    marginBottom: 2
  },
  imageStyle: {
    width: 60, 
    height: 60, 
    resizeMode: 'center',
    borderRadius: 66
  },
  labelColor: {
    color: Colors.primary,
  },
  labelColor2: {
    color: Colors.primary,
    fontSize: 11,
  },
  labelColor3: {
    color: Colors.primary,
    fontSize: 11,
    textAlign: 'center'
  },
  label: {
    color: Colors.primary,
    marginLeft: 20,
    marginTop: 12,
    
  }
});
  
export default CardBox;