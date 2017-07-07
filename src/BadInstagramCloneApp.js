'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import Camera from 'react-native-camera';

export class BadInstagramCloneApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      image: null
    }

    this.renderCamera = this.renderCamera.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  renderCamera() {
    return (
    <Camera
      ref={(cam) => {
        this.camera = cam;
      }}
      style={styles.preview}
      aspect={Camera.constants.Aspect.fill}>
      <Text style={styles.capture} onPress={this.takePicture.bind(this)}>SOURIEZ !!</Text>
    </Camera>
    );
  }

  renderImage() {
    return (
      <Image
                style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}
                source={{uri: this.state.image.path}}/>
    );
  }

  render() {
    let view;
    if(this.state.image == null) {
      view = this.renderCamera();
    }
    else {
      view = this.renderImage();
    }
    return (
      <View style={styles.container}>
        {view}
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => this.setState({image: data}))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);