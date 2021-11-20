import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Task from './components/Task'

export default function ToDoList() {

    const [task, setTask] = useState('');
    const [taskItem, setTaskItem] = useState([]);


    // const taskItems = [],

    const handleAddTask = () => {

        setTaskItem([...taskItem, task]);
        setTask(null);
    }


    const editTask = () => {
        // console.log(task);  input
        
    }

    const completeTask = (index) => {
        const itemsCopy = [...taskItem];
        itemsCopy.splice(index, 1);
        setTaskItem(itemsCopy);
    }


    return (
        <View style={styles.container}>
            {/* Today's Task */}
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today 's task</Text>


                <View style={styles.items}>
                    {/* content of the task */}
                    {taskItem.map((item, index) => {
                        return <Task completeTask={completeTask} editTask={editTask} text={item} key={index} onPress={() => completeTask(index)} />

                    })}

                    {/* <Task text={'Task 1'} /> */}
                </View>
            </View>

            {/* Write a task */}
            <KeyboardAvoidingView

                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={"Write a Task"}
                    value={task}
                    onChangeText={textValues => setTask(textValues)} />
                {/* ADd Button */}
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdb'
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 20,
    },


    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,

    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        fontSize: 25
    },


})