import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { ProjectList } from '../components/ProjectList';
import { theme } from '../helpers/theme';
import { getAllInactiveProjects } from '../stores/actions/projectActions';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export const Home = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.project);

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllInactiveProjects());
    }, [])
  );

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Available Projects</Text>
        <ProjectList projects={projects} renderOn={'home'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 30, marginTop: 20 },
  text: { fontFamily: theme.font.bold, fontSize: 18 },
});
