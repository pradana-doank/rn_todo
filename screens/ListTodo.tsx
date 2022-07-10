import { useReducer, useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import TodoItem from '../components/TodoItem'
import { initialTodos, todoReducer } from '../hooks/todoReducer'
import TodoModel from '../src/data/TodoModel'

interface ListTodoProps {
  todos: TodoModel[]
  children?: React.ReactNode
}

const ListTodo: React.FC<ListTodoProps> = ({ children, todos }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)

  const [name, setName] = useState('')

  return (
    <View style={styles.view}>
      <Text style={styles.header}>List Todo</Text>
      <TextInput
        placeholder="Todo name"
        style={styles.input}
        onChangeText={(e) => setName(e)}
        value={name}
      />
      <Button
        title="Add new todo"
        onPress={(e) =>
          dispatch({
            type: 'addTodo',
            payload: {
              key: name.toLowerCase().split(' ').join(''),
              name: name,
              date: Date.now(),
            },
          })
        }
      />

      {state.length > 0 ? (
        <FlatList
          style={{
            marginTop: 20,
          }}
          data={state}
          renderItem={(data) => (
            <TodoItem key={data.item.key} todo={data.item} />
          )}
        />
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    margin: 12,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
})
export default ListTodo
