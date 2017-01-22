import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Navigator } from 'react-native';

export default class MapScene extends Component {
    static get defaultProps() {
        return {
            title: 'Map'
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={{ flex: 1}}>Current Scene: {this.props.title}</Text>

                <TouchableHighlight style={{ flex: 2}} onPress={this.props.onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>

                <TouchableHighlight style={{ flex: 2}} onPress={this.props.onBack}>
                    <Text>Tap me to go back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

MapScene.propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};
