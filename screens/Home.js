import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectList } from '../components/ProjectList';
import { theme } from '../helpers/theme';
import { getAllInactiveProjects } from '../stores/actions/projectActions';

export const Home = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getAllInactiveProjects());
  }, []);

  console.log(projects)

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
