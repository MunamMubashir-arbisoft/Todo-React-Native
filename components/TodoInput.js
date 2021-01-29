import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Modal } from 'react-native';
import AppButton from './Button';

let ID = 0

const TodoInput = ({ onAddTodo, isVisible, toggleInputInvisible }) => {
    const [todo, setTodo] = useState({ title: '', isCompleted: false })

    const handleTodoTitleChange = (changedTitle) => {
        setTodo({ ...todo, title: changedTitle })
    }

    const handleTodoDescriptionChange = (changedDesc) => {
        setTodo({...todo, description: changedDesc})
    }

    const AddTodoToList = () => {
        ID = ID + 1
        toggleInputInvisible()
        onAddTodo(ID.toString(), todo)
        setTodo({})
    }

    return (
        <Modal animationType="slide" visible={isVisible} >
            <View style={styles.inputBlock}>
                <TextInput
                    value={todo.title}
                    placeholder='Name your Todo'
                    style={styles.titleInputField}
                    onChangeText={handleTodoTitleChange}
                />

                <TextInput
                    value={todo.description}
                    placeholder='What do you have to do?'
                    style={styles.descInputField}
                    onChangeText={handleTodoDescriptionChange}
                />

                <AppButton
                    title='Add'
                    onPress={AddTodoToList}
                    color='#5ac8fa'
                />

                <AppButton 
                    title='Cancel'
                    onPress={toggleInputInvisible.bind(this)}
                    color='red'
                />

                <StatusBar
                    style='auto'
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputBlock: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleInputField: {
        height: 30,
        width: '50%',
        fontSize: 22,
        alignSelf: 'flex-start',
        marginBottom: 5,
        marginLeft: 45,
        color: 'grey'
    },
    descInputField: {
        height: 42,
        width: '80%',
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 20,
        textAlign: 'center',
        color: 'grey'
    }
});

export default TodoInput;
