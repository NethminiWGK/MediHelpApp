import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateFields = () => {
    let valid = true;

    if (!username) {
      setUsernameError('This field is required');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('This field is required');
      valid = false;
    } else if (password.length > 8) {
      setPasswordError('Password must be a maximum of 8 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleLogin = () => {
    if (validateFields()) {
      // Navigate to Home page on successful validation
      navigation.navigate('Home' , {username});
    }
  };

  return (
    <View style={styles.container}>
       {/* Add doctor image */}
       <Image
        source={require('../assets/doctor4.png')} // Replace with the actual path to your doctor image
        style={styles.image}
      />
      <Text style={styles.title}>Meet Your Doctor</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={username}
        onChangeText={setUsername}
      />
      {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* "Don't have an account? Sign Up" */}
      <Text style={styles.signupText}>
        Don't you have an account?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#007BFF',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '90%', 
    height: undefined, // Remove fixed height
    aspectRatio: 1, 
    marginBottom: 20,
    resizeMode: 'contain', // Adjust the image to fit within the container while maintaining the aspect ratio
  },
  
  signupText: {
    marginTop: 20,
    fontSize: 14,
    color: '#666',
  },
  signupLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
  },
});
