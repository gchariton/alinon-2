import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import TextHyperlink from '../components/TextHyperlink';
import Screen from './Screen';
import colors from '../config/colors';

function AboutScreen({}) {
    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.text}>App created by G. Charitonidis</Text>
                <TextHyperlink
                    style={styles.text}
                    url='https://icloud.gr'
                    text='icloud.gr'
                />
            </View>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>2.0</Text>
            </View>
            <View style={styles.attention}>
                <Text style={styles.text}>
                    ATTENTION: This app is for test purposes only and shall be
                    used only by the author. No warranty and no responsibility
                    for any damage to your device. All APIs are free to use
                    along with the corresponding restrictions. Thank you for
                    your co-operation.
                </Text>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    attention: {
        borderColor: colors.red,
        borderRadius: 10,
        borderWidth: 2,
        padding: 5,
        width: '90%',
        margin: 10,
    },
    container: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        color: colors.white,
        fontFamily: 'monospace',
        padding: 5,
    },
});

export default AboutScreen;
