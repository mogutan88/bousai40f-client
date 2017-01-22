import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Navigator } from 'react-native';

export default class Scene1 extends Component {
    static get defaultProps() {
        return {
            title: 'Scene1'
        };
    }

    render() {
        return (
            <View>
                <Text>Current Scene: {this.props.title}</Text>

                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Tap me to go back</Text>
                </TouchableHighlight>
            </View>
        )

    }
}

Scene1.propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};
