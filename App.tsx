import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import ListTodo from './screens/ListTodo'
import todos from './src/data/Todos'

export default function App() {
  return (
    <View style={styles.container}>
      <ListTodo todos={todos} />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
})
