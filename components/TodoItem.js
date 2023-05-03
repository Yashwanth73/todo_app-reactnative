import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoItem({ todo }) {
    return (
        <View style={styles.todo}>
            <Text style={styles.todoText}> {todo.text}</Text>
            <TouchableOpacity>
                <Entypo style={styles.todoAction} name="edit" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons style={styles.todoAction} name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        marginHorizontal: 10,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 50,
    },
    todoText: {
        flex: 1,
        fontSize: 18,
        paddingVertical: 4,
        paddingHorizontal: 5,

    },
    todoAction: {

    }
});