import React from 'react';
import {
  StyleSheet,
  Platform,
  Dimensions,
  View
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen';

import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  const handlePress = () => console.log(require('./app/assets/icon.png'));
  console.log(Dimensions.get('screen'))
  console.log(useDimensions());
  const orientation = useDeviceOrientation();
  console.log(orientation);
  return (
    <ListingsScreen></ListingsScreen>
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
