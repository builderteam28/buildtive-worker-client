import React, { useCallback, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { ProjectList } from '../components/ProjectList';
import { theme } from '../helpers/theme';
import { getAllInactiveProjects, getProjectDetails } from '../stores/actions/projectActions';
import { useFocusEffect } from '@react-navigation/native';

export const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { projects } = useSelector((state) => state.project);

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllInactiveProjects())
        .then((data) => {
          console.log(data, "<<data")
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
