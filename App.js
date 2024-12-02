import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/Login'; // Import your login component
import Signup from './src/Signup';
import Start from './src/Startpage';

export default function App() {
  
  return (
    <View style={styles.container}>
    
      {/* <Login /> */}
      {/* <Signup/> */}
      <Start/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
