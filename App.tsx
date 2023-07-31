import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import StackNavigators from './android/app/src/StlAndroid/src/navigator/stackNavigation';

const App = () => {
  return (
    <>
      {/* to hide status bar <StatusBar hidden/>  */}
      <StatusBar hidden />
      <NavigationContainer>
        <StackNavigators/>
        {/* <UserNavigators /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
