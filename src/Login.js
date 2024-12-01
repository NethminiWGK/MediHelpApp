import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

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
      setSuccessMessageVisible(true); // Show success pop-up
      setTimeout(() => setSuccessMessageVisible(false), 3000); // Hide it after 3 seconds
    }
  };

  return (
    <View style={styles.container}>
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

      {/* Success Pop-up */}
      {successMessageVisible && (
        <View style={styles.successPopup}>
          <Text style={styles.successText}>Login Successful!</Text>
        </View>
      )}
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
    fontSize: 24,
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
  },
  successPopup: {
    position: 'absolute',
    bottom: 30,
    width: '90%',
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
