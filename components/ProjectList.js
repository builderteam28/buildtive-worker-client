import React from 'react';
import { FlatList, View } from 'react-native';
import { ProjectCard } from './ProjectCard';

export const ProjectList = ({ projects, renderOn }) => {
  const renderItem = ({ item }) => {
    return <ProjectCard item={item} renderOn={renderOn} />;
  };

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList data={projects} renderItem={renderItem} keyExtractor={(_, index) => index} />
    </View>
  );
};
