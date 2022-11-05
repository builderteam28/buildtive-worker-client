import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../helpers/theme';

export const ProjectDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Available Projects</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 30, marginTop: 20 },
  text: { fontFamily: theme.font.bold, fontSize: 18 },
});