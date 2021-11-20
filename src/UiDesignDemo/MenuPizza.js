import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Image } from 'react-native'

const ArrowLeftHeaderIcon = require('./assets/image/IconLeft.png');
const Pizza = require('./assets/image/Pizza.png');
const MenuPizza = () => {



    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingHorizontal: getBaseWidth(24) }}>

                {/* Top View */}
                <View style={{ flexDirection: 'row' }}>
                    {/* Left InSide */}
                    <View>
                        <Image source={Pizza} />
                    </View>

                    {/* Right Inside */}
                    <View style={{ justifyContent: 'space-between' }}>
                        {/* Inner Top-Right Inside */}
                        <View>
                            <Text>Pinnacle Pizza KCal : 500</Text>
                            <Text>Luna's howl, hush, delirium, revoker</Text>
                        </View>

                        {/* Inner Bottom-Right Inside */}

                        <View>
                            <Text>$ 99.00 $ 22.00</Text>
                        </View>

                    </View>
                </View>


                {/* Bottom View */}
                <View>
                    <Text>twice by you</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default MenuPizza

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
    container: {
        flex: 1,
    },
})

