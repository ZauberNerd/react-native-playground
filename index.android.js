/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ButtonDemos from './components/atoms/button/demo';

export default class uiex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          These are the buttons you're looking for:
        </Text>
        {ButtonDemos.map((demo, i) => (
          <View key={i}>
            <Text>{demo.title}</Text>
            {demo.render()}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('uiex', () => uiex);
