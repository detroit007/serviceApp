import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import TextCustom from '../../components/TextCustom';

const PrivacyPolicyScreen = () =>{
    return(
        <View style={styles.screen}>
            <View style={styles.container}>
            <View style={styles.contHead}>
                <TextCustom style={styles.head}>We would love to help you!</TextCustom>
                <TextCustom style={styles.label}>Our customer support is available from 9am to 5pm(Monday to Friday).
                    We are passionate about our community platform as well as our members and it shows the
                    quality of service we provide. If you have any questions feel free to ask!
                </TextCustom>
            </View>
                <View>
                    <TextCustom>Our policies</TextCustom>
                </View>
            </View>

        </View>
    );
} 

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        backgroundColor: Colors.accent,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    head :{
        fontSize: 22,
        color: Colors.primary,
        textAlign: 'center'
    },
    label :{
        color: Colors.primary,
        marginTop: 20

    }
});

export default PrivacyPolicyScreen;