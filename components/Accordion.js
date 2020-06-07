import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const WIDTH = Dimensions.get('window').width;

const Accordion = props => {

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
      <View style={{...styles.container, ...props.style}}>
          <View style={styles.wraper}>
            <TouchableOpacity activeOpacity={0.6} onPress={handlePress} style={{flexDirection: 'row-reverse'}}>
              <Icon name={icon} size={20} color={Colors.primary} style={{marginTop: margin }}/>
              <Text style={{fontSize: 11, marginRight: 8, color: Colors.primary}}>show {text}</Text>
            </TouchableOpacity>
            <View style={{display: val}}>
              <Text style={styles.labelColor}>{props.titleName}</Text>
              <Text style={styles.label}>{props.descriptionFirst}</Text>
            </View>
            <View style={{display: val, marginTop: 12}}>
              <Text style={styles.labelColor}>{props.stitleName}</Text>
              <Text style={styles.label}>{props.descriptionSecond}</Text>
            </View>
            <View style={{display: val, marginTop: 12}} >
              {props.children}
            </View>

            <View style={{display: props.taskVisiable, marginTop: 12}}>
              <Text style={styles.labelColor}>Service Assigned to</Text>
              <View style={{flexDirection: 'row', marginTop: 12, marginLeft: 12}}>
              <Image source={require('../assets/img/default_male.png')} style={styles.imageStyle2} />
                <View style={{marginLeft: 10, marginTop: 12}}>
                  <Text style={[styles.labelColor, {width: 220}]} ellipsizeMode='tail' numberOfLines={1}>{props.name}</Text>
                  <Text style={[styles.labelColor, {width: 220}]} ellipsizeMode='tail' numberOfLines={1}>{props.proffession}</Text>
                </View>
              </View>
            </View>

          </View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',

  },
  wraper: {
    width: '95%',
    paddingTop: 10,
  },
  labelColor: {
    color: Colors.primary,
  },
  label: {
    color: Colors.primary,
    marginLeft: 20,
    marginTop: 12,
    
  },
  imageStyle2: {
    width: 60, 
    height: 60, 
    resizeMode: 'center',
    borderRadius: 150,
  }
});
  
export default Accordion;