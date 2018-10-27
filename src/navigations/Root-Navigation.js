import React from 'react';
import HomeScreen from '@Screens/home';
import { createSwitchNavigator } from 'react-navigation';

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
  });

export default class RootNavigation extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}