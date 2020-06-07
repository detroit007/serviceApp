import React, { useState} from 'react';
import { View , StyleSheet, Switch} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'

const DraweritemWorkoffers = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    return(
        <View style={styles.item}>
            <Icon name='home' size={20}/>
            <Text>Home</Text>
            <Switch 
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={newVal=> setIsEnabled(newVal)}
                value={isEnabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row'
    }
})

export default DraweritemWorkoffers;