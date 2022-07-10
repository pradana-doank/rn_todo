import React, { useEffect, useReducer } from 'react'
import { StyleSheet } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { initialTodos, todoReducer } from '../hooks/todoReducer'
import TodoModel from '../src/data/TodoModel'

interface TodoItemProps {
  children?: React.ReactNode
  todo: TodoModel
}

const TodoItem: React.FC<TodoItemProps> = ({ children, todo }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <BouncyCheckbox
      style={{
        paddingVertical: 5,
      }}
      text={todo.name}
      isChecked={todo.isCompleted}
      onPress={(e) =>
        dispatch({
          type: 'updateTodo',
          payload: todo,
        })
      }
    />
  )
}

const inputStyle = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
})

export default TodoItem
