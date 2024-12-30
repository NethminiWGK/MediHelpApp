import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './src/Startpage'; // Adjust the path based on your project structure
import Login from './src/Login'; // Adjust the path based on your project structure
import SignUp from './src/Signup'; // Import the SignUp component
import Home from './src/Home'; // Import the Home component
import { ClickProvider } from './src/Home';
const Stack = createStackNavigator();

export default function App() {
  return (
    <ClickProvider>
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
          options={{ title: 'Login' ,headerShown: false }} // Header title for Login Screen
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up',headerShown: false  }} // Header title for SignUp Screen
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ClickProvider>
  );
}
