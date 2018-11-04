import React from 'react';
import HomeScreen from '@Screens/home';
import OtpScreen from '@Screens/otp';
import BarcodeScreen from '@Screens/barcode';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Otp: OtpScreen,
    Barcode: BarcodeScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    App: AppNavigator
  },
  {
    initialRouteName: 'App',
    mode: 'modal',
    headerMode: 'none'
  }
);

export default class RootNavigation extends React.Component {
  render() {
    return (
      <SwitchNavigator />
    );
  }
}