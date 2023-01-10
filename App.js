/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App =()  => {

  return (
    <SafeAreaView >
    <Text style={styles.Texter}>  Hello world</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Texter: {
     alignItems:'center',
     justifyContent: 'center',
     alignContent:'center',
     color: 'red'
  },
 
});

export default App;
