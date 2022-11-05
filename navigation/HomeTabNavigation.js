import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../helpers/theme';

const Tab = createBottomTabNavigator();

export const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <View style={[styles.tabBarItemContainer]}>
              <Ionicons name={iconName} size={size} color={color} />
              <Text style={[styles.title, { fontFamily: focused ? 'Raleway_600SemiBold' : 'Raleway_400Regular' }]}>{route.name}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBar,
        },

        headerTitleAlign: 'center',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    borderColor: '#ffffff',
    height: 70,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
  tabBarItemContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontFamily: '',
  },
});
