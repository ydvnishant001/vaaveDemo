import React from 'react'
import {View, StyleSheet, Text, ScrollView, SafeAreaView, KeyboardAvoidingView, LogBox} from 'react-native'
import { Provider, useSelector } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import store from './store';

LogBox.ignoreAllLogs()

const App = () => {
  return <Provider store={store}>
  <AppNavigator/>
</Provider>
}

const styles = StyleSheet.create({})

export default App