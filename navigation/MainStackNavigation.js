import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Register } from '../screens/Register';
import { Login } from '../screens/Login';
import { HomeTabNavigation } from './HomeTabNavigation';
import { ProjectDetail } from '../screens/ProjectDetail';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../helpers/theme';
import { Ionicons } from '@expo/vector-icons';
import { Chat } from '../screens/Chat';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export const MainStackNavigation = () => {
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      let access_token = await AsyncStorage.getItem('access_token');
      setAccessToken(access_token);
    };

    getToken();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Create User Account', headerTitleStyle: { fontFamily: theme.font.medium } }}
      />
      <Stack.Screen name="HomeTab" component={HomeTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetail} options={{ header: HeaderProjectDetail }} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

const HeaderProjectDetail = ({ navigation, route, options }) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={{ backgroundColor: theme.colors.black, padding: 10, borderRadius: 15, alignItems: 'center', flexDirection: 'row' }}
        onPress={navigation.goBack}
      >
        <Ionicons name="arrow-back" size={18} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};
