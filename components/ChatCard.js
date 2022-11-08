import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../helpers/theme';

export const ChatCard = ({ item }) => {
  const navigation = useNavigation();

  const navigateToChat = () => {
    navigation.navigate('Chat', {
      chatId: item.id,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigateToChat()}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
  },
  name: {
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
});
