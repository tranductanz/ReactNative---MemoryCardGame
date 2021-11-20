
import React, { Fragment } from 'react'
import { View, TextInput, Dimensions, StyleSheet } from 'react-native'

const FormInput = () => {
    return (
        <Fragment>
            <View style={styles.inputContainer}>
                <TextInput style={styles.formInput} placeholderTextColor={'#DBDFE3'} placeholder="Email or Phone Number" />
                <TextInput style={styles.formInput} placeholderTextColor={'#DBDFE3'} placeholder="Password" />
            </View>
        </Fragment>
    )
}

//! hàm tính công thức chiều dọc Device

const device_height = Dimensions.get('window').height;
const device_width = Dimensions.get('window').width;
//! 375x812 là 1 device, thông số này do Designer Figma cấp
const getBaseHeight = (size) => {
    return (device_height / 812) * size;
}

const getBaseWidth = (size) => {
    return (device_width / 375) * size;
}
const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: getBaseWidth(24),
    },
    formInput: {
        borderColor: '#E8E8E8',
        borderWidth: 1,
        height: getBaseHeight(49),
        width: getBaseWidth(327),
        marginBottom: getBaseHeight(16),
        borderRadius: 8,
        paddingLeft: getBaseWidth(16),
        paddingTop: getBaseHeight(17),
        paddingBottom: getBaseHeight(13),
    },
})
export default FormInput
