import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@Screens/home';
import OtpScreen from '@Screens/otp';
import BarcodeScreen from '@Screens/barcode';
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Otp" component={OtpScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Barcode" component={BarcodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}