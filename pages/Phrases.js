import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Phrases() {
  return (
    <View style={styles.container}>
      <Text>Phrases</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f8f8f8',
    width: '100%',
 
  },
})