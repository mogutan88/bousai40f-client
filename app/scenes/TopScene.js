import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Image, Text, TouchableHighlight, Navigator, StyleSheet } from 'react-native';
import ReqButton from '../components/ReqButton';


export default class TopScene extends Component {
    static get defaultProps() {
        return {
            title: 'Top'
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Image style={{width: 32, height: 32}} source={require('./../../img/smile.png')} />
                    {/*<Text>😀</Text>*/}
                    <Text>千代田区</Text>
                    <Image style={{width: 32, height: 32}} source={require('./../../img/sunny.png')} />

                </View>
                <View style={styles.container}>
                    <ReqButton label="飲料"></ReqButton>
                    <ReqButton label="食料"></ReqButton>
                    <ReqButton label="トイレ"></ReqButton>
                    <ReqButton label="寝具"></ReqButton>

                    <Text>Current Scene: {this.props.title}</Text>

                    <TouchableHighlight onPress={this.props.onForward}>
                        <Text>Tap me to load the next scene</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.props.onBack}>
                        <Text>Tap me to go back</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )

    }
}

TopScene.propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
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