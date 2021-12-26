import React, { useState } from 'react';
import {
  StyleSheet,
  Platform,
  Dimensions,
  View,
  TextInput,
  Text
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen';

import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';


export default function App() {
  console.log(useDimensions());
  const orientation = useDeviceOrientation();
  console.log(orientation);
  return (
    <ListingEditScreen></ListingEditScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
