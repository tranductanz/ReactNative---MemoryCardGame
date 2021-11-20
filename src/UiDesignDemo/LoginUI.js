import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import ButtonLogin from './components/ButtonLogin/ButtonLogin';
import FormInput from './components/FormInput/FormInput';
import Header from './components/Header/Header';


const LoginUI = () => {


    return (
        // const behavior = Platform.OS === 'ios' ? 'padding' : undefined
        //! KeyboardAvoidingView có nghĩa là khi mà Component ở dưới có input hay gì
        //! thì bấm vô sẽ hiện bàn phím đồng thời đẩy View lên không bị che lại
        <SafeAreaView style={styles.container}>

            <Header />

            {/* Form Input */}
            <FormInput />

            {/* BTN Footer */}
            <ButtonLogin />
        </SafeAreaView>

    )
}


export default LoginUI
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

