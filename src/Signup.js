import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phonenumberError, setPhonenumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmpasswordError, setConfirmpasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const validateFields = () => {
    let valid = true;

    if (!username) {
      setUsernameError('This field is required');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!email) {
      setEmailError('This field is required');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!phoneNumber) {
      setPhonenumberError('This field is required');
      valid = false;
    } else {
      setPhonenumberError('');
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

    if (!confirmPassword) {
      setConfirmpasswordError('This field is required');
      valid = false;
    } else if (password.length > 8) {
      setConfirmpasswordError('Password must be a maximum of 8 characters');
      valid = false;
    } else {
      setConfirmpasswordError('');
    }

    return valid;
  };

  const handleSignUp = () => {
    if (validateFields()) {
      setSuccessMessageVisible(true);
      setTimeout(() => setSuccessMessageVisible(false), 3000); 
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={username}
        onChangeText={setUsername}
      />
       {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      {phonenumberError ? <Text style={styles.errorText}>{phonenumberError}</Text> : null}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon
            name={showConfirmPassword ? 'visibility' : 'visibility-off'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {confirmpasswordError ? <Text style={styles.errorText}>{confirmpasswordError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      
      {/* Success Pop-up */}
      {successMessageVisible && (
        <View style={styles.successPopup}>
          <Text style={styles.successText}>SignUp Successful!</Text>
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
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
