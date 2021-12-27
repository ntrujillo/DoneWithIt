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

export default function App() {
  console.log(useDimensions());
  const orientation = useDeviceOrientation();
  console.log(orientation);


  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('Yo need to enable permissions to access your photos library');
  };

  useEffect(() => {
    requestPermission();
  }, []);


  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        console.log('ImageUri', result.uri);
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  }

  return (
    <Screen>
      <Button title='Select Image' onPress={selectImage}></Button>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
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
