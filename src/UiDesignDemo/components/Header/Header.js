import React, { Fragment } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
const ArrowLeftHeaderIcon = require('../../assets/image/IconLeft.png');
const Header = () => {
    return (
        <Fragment>
            <View style={styles.header}>
                <Image style={{ width: getBaseWidth(8), height: getBaseHeight(14), }} source={ArrowLeftHeaderIcon} />
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.bigLabel}>Sign In</Text>
                <Text style={styles.smallLabel}>Don't have an account? <Text style={{ color: '#FB6D3B' }}>Sign up now!</Text></Text>
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
    header: {
        height: getBaseHeight(24),
        marginTop: getBaseHeight(12),
        paddingHorizontal: getBaseWidth(32),
        marginTop: getBaseHeight(29),

        // backgroundColor: 'red',
    },
    bigLabel: {
        fontSize: 40,
        fontWeight: '500',
    },
    smallLabel: {
        marginTop: getBaseHeight(16),
        marginBottom: getBaseHeight(32),
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '500',
    },

    labelContainer: {
        marginTop: getBaseHeight(56),
        paddingHorizontal: getBaseWidth(24),
    },
})

export default Header
