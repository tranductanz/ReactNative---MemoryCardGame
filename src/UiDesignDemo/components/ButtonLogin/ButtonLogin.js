import React, { Fragment } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'



const facebookLogo = require('../../assets/image/Facebook.png');
const googleLogo = require('../../assets/image/google-2015-seeklogo.com.png');
const ButtonLogin = () => {
    return (
        <Fragment>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.smallLabelBtnText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonSize, styles.loginBtn]}>
                    <Text style={styles.textBtn}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={styles.textMiddleBtn}>OR</Text>
                <TouchableOpacity style={[styles.buttonSize, styles.facebookBtn]}>
                    <View>
                        <View style={styles.fillColorBtn}>
                            <Image style={styles.facebookLogo} source={facebookLogo} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textBtn}>CONTINUE WITH FACEBOOK</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonSize, styles.googleBtn]}>
                    <View>
                        <View style={styles.fillColorBtn}>
                            <Image style={[styles.googleLogo, { width: 20, height: 20 }]} source={googleLogo} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textBtn}>CONTINUE WITH GOOGLE</Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity style={[styles.buttonSize, styles.googleBtn]}>
                    <Image style={{ width: getBaseWidth(25), height: getBaseHeight(25) }} source={googleLogo} />
                    <Text>CONTINUE WITH GOOGLE</Text>
                </TouchableOpacity> */}
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
    buttonContainer: {
        paddingHorizontal: getBaseWidth(24),
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallLabelBtnText: {
        marginTop: getBaseHeight(16),
        marginBottom: getBaseHeight(24),
    },
    textBtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: getBaseHeight(15),
        marginBottom: getBaseWidth(14),
    },

    textMiddleBtn: {
        paddingVertical: getBaseHeight(24),
        color: '#697586',

    },

    buttonSize: {
        height: getBaseHeight(46),
        width: getBaseWidth(327),
        flexDirection: 'row',
    },

    loginBtn: {
        backgroundColor: '#FB6D3B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebookBtn: {
        backgroundColor: '#4460A0',
        marginBottom: getBaseHeight(16),
        marginTop: getBaseHeight(14.67),
    },
    facebookLogo: {
        marginHorizontal: getBaseWidth(10.83),
        marginVertical: getBaseHeight(6.67),
    },
    googleLogo: {
        marginTop: getBaseHeight(6),
        marginLeft: getBaseWidth(5),
    },
    googleBtn: {
        backgroundColor: '#4285F4',
    },
    fillColorBtn: {
        height: getBaseHeight(30),
        backgroundColor: '#fff',
        borderRadius: 4,
        width: 30,
        marginVertical: getBaseHeight(8),
        marginLeft: getBaseWidth(8),
        marginRight: getBaseWidth(28),
    },
})
export default ButtonLogin
