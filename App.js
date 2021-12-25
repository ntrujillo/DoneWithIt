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

import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  const [firstName, setFirstName] = useState('');
  const handlePress = () => console.log(require('./app/assets/icon.png'));
  console.log(Dimensions.get('screen'))
  console.log(useDimensions());
  const orientation = useDeviceOrientation();
  console.log(orientation);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
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
