import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

export default class ReqButton extends Component {
    constructor(props) {
        super(props);
        var mood = '';

        switch(Math.floor((Math.random() * 3) + 1) % 3) {
            case 0: mood = 'smile'; break;
            case 1: mood = 'neutral'; break;
            case 2: mood = 'sad'; break;
        }

        this.state = {mood: mood};
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Image style={{width: 16, height: 16}} source={require('./../../img/smile.png')} />
                    {/*<Image style={{width: 16, height: 16}} source={require('./../../img/' + 'smile' + '.png')} />*/}
                    <Text>{this.props.label}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    _onPressButton() {

    }

    _onMoodChanged(mood) {

    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: 30,
        padding: 5,

        borderWidth: 2,
        borderColor: '#C5CCFF',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 10,
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