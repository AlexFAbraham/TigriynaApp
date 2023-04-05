import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Alphabet() {
  return (
    <View style={styles.container}>
      <Text>Alphabet</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    width: '100%',
 
  },
})