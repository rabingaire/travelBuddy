import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Components/Home';

const Routes = StackNavigator({
  Home: { screen:  Home }
});

export default class Main extends Component {
  render() {
    return(
      <Routes />
    )
  }
}