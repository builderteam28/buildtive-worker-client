import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from '../screens/Home';
import { MyJobs } from '../screens/MyJobs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../helpers/theme';
import HeaderTab from '../components/HeaderTab';
import { ProfileWorker } from '../screens/ProfileWorker';
import { ChatList } from '../screens/ChatList';

const Tab = createBottomTabNavigator();

export const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: HeaderTab,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Jobs') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Chats') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
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
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Jobs" component={MyJobs} />
      <Tab.Screen name="Profile" component={ProfileWorker} options={{ headerShown: false }} />
      <Tab.Screen name="Chats" component={ChatList} options={{ headerShown: false }} />
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
