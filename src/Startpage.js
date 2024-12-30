import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Welcome to MediHelp App</Text>
        <Text style={styles.paragraph}>
        Stay healthy, stay informed , check doctor availability at your fingertips.
        </Text>
      </View>

      {/* Doctor Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/doctor1.png')} 
          style={styles.doctorImage}
        />
      </View>

     
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
    color: '#2C3E50', 
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#2C3E50', 
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF', 
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF', 
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    marginBottom: 50,
  },
  doctorImage: {
    width: 500, 
    height: 500,
    resizeMode: 'contain',
  },
});
