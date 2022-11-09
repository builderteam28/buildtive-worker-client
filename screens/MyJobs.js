import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { ProjectList } from '../components/ProjectList';
import { theme } from '../helpers/theme';
import { getAllJobsProjectWorker } from '../stores/actions/projectActions';

export const MyJobs = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { jobs: projects } = useSelector((state) => state.project);

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllJobsProjectWorker())
        .then((data) => {
          if (data) {
            setIsLoading(false);
          }
        })
        .catch(() => {
          setIsLoading(false);
        });
    }, [])
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

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
  container: { flex: 1, marginHorizontal: 30, marginTop: 20, marginBottom: '30%' },
  text: { fontFamily: theme.font.bold, fontSize: 18 },
});
