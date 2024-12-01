import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/Login'; // Import your login component

export default function App() {
  
  return (
    <View style={styles.container}>
    
      <Login />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
