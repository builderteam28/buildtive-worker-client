import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProjectList } from '../components/ProjectList';
import { theme } from '../helpers/theme';

export const Home = () => {
  const [projects] = useState([
    {
      id: 1,
      name: 'Perbaikan pagar gedung sekolah',
      workHours: 7,
      totalWorker: 5,
      cost: 1000000,
      status: 'active',
      UserId: 1,
      long: 2901,
      lat: 291,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'gas test',
      workHours: 7,
      totalWorker: 5,
      cost: 1000000,
      status: 'inactive',
      UserId: 1,
      long: 2901,
      lat: 291,
      categoryId: 1,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Available Projects</Text>
      <ProjectList projects={projects} renderOn={'home'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 30, marginTop: 20 },
  text: { fontFamily: theme.font.bold, fontSize: 18 },
});
