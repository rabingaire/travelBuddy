import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Components/Home';
import NearMe from './Components/NearMe';

const Routes = StackNavigator({
  Home: { screen:  Home },
  NearMe: { screen: NearMe },
});

export default class Main extends Component {
  render() {
    return(
      <Routes />
    )
  }
}