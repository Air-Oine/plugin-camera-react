import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Application } from './src/Application'

export default class PluginCamera2 extends Component {
  render() {
    return (
      <Application/>
    );
  }
}

AppRegistry.registerComponent('PluginCamera2', () => PluginCamera2);
