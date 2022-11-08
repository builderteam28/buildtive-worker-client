import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { theme } from '../helpers/theme';

export function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              textStyle={{
                left: {
                  color: theme.colors.black,
                },
                right: {
                  color: theme.colors.white,
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: theme.colors.white,
                  borderWidth: 1,
                  borderColor: theme.colors.black,
                },
                right: {
                  backgroundColor: theme.colors.grey,
                },
              }}
            />
          );
        }}
        renderAvatar={null}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
