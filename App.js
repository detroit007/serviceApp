import React from 'react';
import {StatusBar, View} from 'react-native';

import Colors from './constants/Colors';
import AuthStack from './Navigator/AuthStack';
import ChooseServiceScreen from './screens/provider/ChooseServiceScreen'
import VerificationScreen from './screens/subScreens/VerificationScreen';
import NearbyProviderScreen from './screens/customer/NearbyProviderScreen';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.primary} />

      <NearbyProviderScreen/>
      {/* <AuthStack/> */}
      {/* <ChooseServiceScreen/> */}

      {/* <VerificationScreen/> */}
    </View>
  );
};

export default App;
