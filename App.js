import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Autoauto Demo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
