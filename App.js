import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'
import AppButton from './components/Button';


export default function App() {
  const [todoList, setTodoList] = useState([])
  const [isInputVisible, setIsInputVisible] = useState(false)

  const handleTodoStatusChange = (todoID) => {
    setTodoList(prevList => {
      return prevList.map(todo => todo.id === todoID ? {...todo, isCompleted: !todo.isCompleted} : todo)
    })
  }

  const handleAddTodoEvent = (todoID, todoObject) => {
    setTodoList(prevList => [...prevList, {...todoObject, id: todoID }])
  }

  const handleDeleteTodoEvent = (todoID) => {
    console.log(todoID)
    setTodoList((prevList) => {
      return prevList.filter((todo) => todo.id !== todoID)
    })
  }

  const handleInputVisibiltyToggle = () => {
    setIsInputVisible(!isInputVisible)
  }


  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
      </View>

      <Button title='Add new Todo' color='#5ac8fa' onPress={handleInputVisibiltyToggle}/>
      
      <TodoInput
        onAddTodo={handleAddTodoEvent}
        isVisible={isInputVisible}
        toggleInputInvisible={handleInputVisibiltyToggle}
      />
      
      <FlatList
        data={todoList}
        renderItem={todoData => (
          <TodoItem
            todo={todoData.item}
            onTodoStatusChange={handleTodoStatusChange}
            onDeleteTodo={handleDeleteTodoEvent}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
  },
  title: {
    marginTop: 50,
    marginBottom: 15,
    fontSize: 46
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  inputField: {
    height: 30,
    width: '70%',
    borderColor: 'gray',
    borderRadius: 2,
    borderWidth: 1,
    textAlign: 'center'
  }
});
