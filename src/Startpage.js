import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Welcome to MediHelp App</Text>
        <Text style={styles.paragraph}>
          This application has a feature to consult a doctor or become a doctor.
        </Text>
      </View>

      {/* Doctor Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/doctor.jpg')} // Replace with your doctor image path
          style={styles.doctorImage}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert('Start button pressed!');
        }}
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
    backgroundColor: '#FF7F50', // Coral orange color for the button
    padding: 15,
    width: '90%',
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
    width: 400, // Adjust size based on your image
    height: 500,
    resizeMode: 'contain',
  },
});
