import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedLoader from 'react-native-animated-loader';

import navigationTheme from './src/navigation/navigationTheme';
import OfflineNotice from './src/components/OfflineNotice';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';
import {navigationRef} from './src/navigation/rootNavigation';
import authStorage from './src/auth/storage';
import AuthContext from './src/auth/context';

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const loggedInUser = await authStorage.getUser();
    if (loggedInUser) {
      return setUser(loggedInUser);
    } else {
      return setIsReady(true);
    }
  };

  useEffect(() => {
    restoreUser();
  }, []);

  if (!isReady) {
    return (
      <AnimatedLoader
        visible={isReady}
        overlayColor="rgba(255,255,255,0.75)"
        source={require('./src/assets/animation/loader.json')}
        animationStyle={styles.lottie}
        speed={1}
      />
    );
  }
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <StatusBar style="auto" />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {/* <AppNavigator /> */}
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

export default App;
