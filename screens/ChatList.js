import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ChatCard } from '../components/ChatCard';

export const ChatList = () => {
  const projects = [
    {
      id: 1,
      UserId: 1,
      WorkerId: 2,
      name: 'Customer Test 1',
      lastMessage: 'Hello, ABC',
    },
    {
      id: 2,
      UserId: 2,
      WorkerId: 2,
      name: 'Customer Test 2',
      lastMessage: 'Hello, EFG',
    },
  ];

  const renderItem = ({ item }) => {
    return <ChatCard item={item} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={projects} renderItem={renderItem} keyExtractor={(_, index) => index} />
    </View>
  );
};
