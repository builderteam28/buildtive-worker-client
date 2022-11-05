import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Register } from '../screens/Register';
import { Login } from '../screens/Login';
import { HomeTabNavigation } from './HomeTabNavigation';
import { ProjectDetail } from '../screens/ProjectDetail';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HomeTab" component={HomeTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetail} />
    </Stack.Navigator>
  );
};
