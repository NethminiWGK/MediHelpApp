import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('./assets/doctor-app-bg.jpg')} // Replace with your image file name in the assets folder
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Doctor App</Text>
        <Text style={styles.paragraph}>
          This application has a feature to consult a doctor or become a doctor.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert('Start button pressed!');
          }}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50', // Dark blue color for the title
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#2C3E50', // Dark blue color for the paragraph text
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF7F50', // Coral orange color for the button
    padding: 15,
    width: '70%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontWeight: 'bold',
    fontSize: 16,
  },
});
