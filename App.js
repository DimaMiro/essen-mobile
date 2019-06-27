import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

import store from './store';
import { Provider } from 'react-redux';
import ACTION_TYPES from './constants/ActionTypes';

import AppNavigator from './navigation/AppNavigator';


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}

async function fetchRecipes() {
  await firebase.database().ref('recipes').once('value', function (snapshot) {
      Object.entries(snapshot.val()).map(([key, value]) => 
        store.dispatch({
          type: ACTION_TYPES.ADD_RECIPE,
          recipe: value
        })
      )
  });
}

async function loadResourcesAsync() {
  if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
  
  await Promise.all([
    fetchRecipes(),
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      'typo-grotesk': require('./assets/fonts/Typo-Grotesk-Bold.otf'),
      'fontello': require('./assets/fonts/fontello.ttf'),
    }),
  ]);
  
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
