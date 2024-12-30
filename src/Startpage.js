import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Welcome to MediHelp App</Text>
        <Text style={styles.paragraph}>
        Stay healthy, stay informed.check doctor availability at your fingertips.
        </Text>
      </View>

      {/* Doctor Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/doctor1.png')} // Replace with your doctor image path
          style={styles.doctorImage}
        />
      </View>

      {/* Navigate to Login */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFF6DD',
   
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#2C3E50', // Dark blue color for the title
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#2C3E50', // Dark blue color for the paragraph text
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF', // Coral orange color for the button
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Places the image towards the bottom
    alignItems: 'center',
    marginBottom: 50, // Adjust as needed
  },
  doctorImage: {
    width: 500, // Adjust size based on your image
    height: 500,
    resizeMode: 'contain',
  },
});
