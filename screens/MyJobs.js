import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { ProjectList } from '../components/ProjectList';
import { theme } from '../helpers/theme';
import { getAllJobsProjectWorker } from '../stores/actions/projectActions';

export const MyJobs = () => {
  const dispatch = useDispatch();
  const { jobs: projects } = useSelector((state) => state.project);

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllJobsProjectWorker());
    }, [])
  );

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Currently Working Jobs</Text>
        <ProjectList projects={projects} renderOn={'jobs'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 30, marginTop: 20 },
  text: { fontFamily: theme.font.bold, fontSize: 18 },
});
