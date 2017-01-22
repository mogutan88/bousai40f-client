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
import {Scene, Router, Actions} from 'react-native-router-flux';

import TopScene from './app/scenes/TopScene';
import MapScene from './app/scenes/MapScene';


class Bousai40Rn extends Component {
    render() {
        return <Router>
            <Scene key="root">
                <Scene
                    key="top"
                    component={TopScene}
                    title="Top"
                    onForward={() => {
                        Actions.map()
                    }}
                />
                <Scene
                    key="map"
                    component={MapScene}
                    title="Map"
                    onBackward={() => {
                        Actions.top()
                    }}
                />
            </Scene>
        </Router>
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
