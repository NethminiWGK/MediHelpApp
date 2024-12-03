import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './src/Startpage'; // Adjust the path based on your project structure
import Login from './src/Login'; // Adjust the path based on your project structure
import SignUp from './src/Signup'; // Import the SignUp component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Start}
          options={{ headerShown: false }} // Hide header for Welcome Screen
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }} // Header title for Login Screen
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up' }} // Header title for SignUp Screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
