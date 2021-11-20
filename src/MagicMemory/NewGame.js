import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { ScreenStack } from './HomeScreen';



const background = require('./assets/images/background.png');
export default function NewGame(props) {


    const { navigation, route } = props;

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImg} source={background}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ScreenStack.MagicMemory)
                    }}
                    style={{ alignItems: 'center', marginTop: 150, }}>
                    <Text style={{ fontSize: 24 }}>New game</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View >
    )
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImg: {
        width: width,
        height: height
    }
})