import React from 'react';
import {
  StyleSheet,
  Platform,
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AccountScreen from './app/screens/AccountScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';


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
