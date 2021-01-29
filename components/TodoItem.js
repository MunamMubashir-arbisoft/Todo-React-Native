import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Touchable, TouchableOpacity, Modal } from 'react-native';


const TodoItem = ({ todo, onTodoStatusChange, onDeleteTodo }) => {
    const { id, title, description, isCompleted } = todo;

    const [descVisible, setDescVisible] = useState(false)

    const handleDescVisible = () => {
        setDescVisible(!descVisible)
    }

    const handleSwitchToggle = () => {
        onTodoStatusChange(id)
    }

    return (
        <TouchableOpacity onLongPress={onDeleteTodo.bind(this, id)} onPress={handleDescVisible}>
            <View style={styles.todoItem}>
                <View style={styles.todoTextBlock}>
                    <Text style={styles.todoTitle}>
                        {title}
                    </Text>
                    {
                    descVisible && <Text style={styles.todoDescription}>
                        {description}
                    </Text>
                    }
                </View>

                <Switch
                    style={styles.todoStatus}
                    trackColor={styles.trackColor}
                    thumbColor={isCompleted ? styles.trackColor.false : styles.trackColor.true}
                    ios_backgroundColor={styles.trackColor.false}
                    onValueChange={handleSwitchToggle}
                    value={isCompleted}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,
        marginTop: 20
    },
    todoTextBlock: {
        flex: 3,
        marginRight: 5,
    },
    todoTitle: {
        fontSize: 20
    },
    todoDescription: {
        fontSize: 15,
        marginTop: 3,
        color: '#5ac8fa'
    },
    todoStatus: {
        marginLeft: 8
    },
    trackColor: {
        false: '#5ac8fa',
        true: '#f4f3f4'
    }
}

export default TodoItem;
