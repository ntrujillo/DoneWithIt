import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Platform,
  Button,
  Image
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AccountScreen from './app/screens/AccountScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  console.log(useDimensions());
  const orientation = useDeviceOrientation();
  console.log(orientation);

  const [imageUris, setImageUris] = useState([]);

  const handleAdd = uri => {
    setImageUris([...imageUris, uri]);
  }

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri != uri));
  }

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={uri => handleAdd(uri)}
        onRemoveImage={uri => handleRemove(uri)} />
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
