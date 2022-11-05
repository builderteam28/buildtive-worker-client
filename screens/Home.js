import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProjectList } from '../components/ProjectList';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../helpers/theme';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="person-circle-outline" size={30} color="black" style={{ marginRight: 10 }} />
        <Text>Hello, Ujang</Text>
      </View>
      <Text style={styles.text}>Available Projects</Text>
      <ProjectList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginLeft: 30, marginTop: 20 },
  text: { fontFamily: theme.font.bold, fontSize: 18 },
});
