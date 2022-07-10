import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import ListTodo from './screens/ListTodo'

import 'react-native-get-random-values'

export default function App() {
  return (
    <View style={styles.container}>
      <ListTodo />

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
