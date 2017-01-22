/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,  } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import TopScene from './app/scenes/TopScene';
import MapScene from './app/scenes/MapScene';


class Bousai40Rn extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) =>
          <TopScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
            />
        )

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
  bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
  },
});

AppRegistry.registerComponent('Bousai40Rn', () => Bousai40Rn);
