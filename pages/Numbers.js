import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Numbers() {
  return (
    <View style={styles.container}>
      <Text>Numbers</Text>
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