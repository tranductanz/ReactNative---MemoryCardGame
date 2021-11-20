import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.itemRight}>
                {/* <TouchableOpacity onPress={props.editTask}>
                    <View style={styles.editBtn} />
                </TouchableOpacity> */}

                <TouchableOpacity onPress={props.completeTask}>
                    <View style={styles.circular}></View>
                </TouchableOpacity>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemRight: {
        flexDirection: 'row',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    editBtn: {
        width: 12,
        height: 12,
        borderColor: 'red',
        borderWidth: 2,
        marginRight: 5,
    }
})

export default Task

