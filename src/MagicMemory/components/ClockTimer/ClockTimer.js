import { Fragment, useEffect, useState } from "react";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export const Clock = props => {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;
        setTimerOn(true);
        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 1000)
        }
        else {
            clearInterval(interval);
        }

        return () => clearInterval(interval)

    }, [timerOn])

    return (
        //! 60000 = 60 giây % 60 vì là giờ
        <View style={styles.clock}>
            <Text style={{ fontSize: 24 }}>{("0" + Math.floor(time / 60000) % 60).slice(-2)} : </Text>
            <Text style={{ fontSize: 24 }}>{("0" + Math.floor(time / 1000) % 60).slice(-2)} : </Text>
            <Text style={{ fontSize: 24 }}>{("0" + (time / 10) % 100).slice(-2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    clock: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
// <View>
// {/* <TouchableOpacity onPress={() => setTimerOn(true)}>
//     <Text>Start</Text>
// </TouchableOpacity> */}

// {/* <TouchableOpacity onPress={() => setTimerOn(false)}>
//     <Text>Stop</Text>
// </TouchableOpacity>

// <TouchableOpacity onPress={() => setTimerOn(true)}>
//     <Text>Resume</Text>
// </TouchableOpacity>

// <TouchableOpacity onPress={() => setTime(0)}>
//     <Text>Reset</Text>
// </TouchableOpacity> */}
// </View>