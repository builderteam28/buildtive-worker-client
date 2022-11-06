import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../helpers/theme';
import MapDetail from '../components/MapDetail';

export const ProjectDetail = ({ route }) => {
  const { id } = route.params;

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <MapDetail />

      <Text style={styles.title}>Perbaikan pagar gedung sekolah</Text>
      <Text style={styles.category}>Category Name</Text>

      <View style={styles.dataContainer}>
        <View style={styles.dataItem}>
          <Ionicons name="people" size={15} color="black" style={styles.iconItem} />
          <Text style={styles.textItem}>abc</Text>
        </View>
        <View style={styles.dataItem}>
          <MaterialIcons name="attach-money" size={15} color="black" style={styles.iconItem} />
          <Text style={styles.textItem}>acas</Text>
        </View>
        <View style={styles.dataItem}>
          <AntDesign name="clockcircle" size={15} color="black" style={styles.iconItem} />
          <Text style={styles.textItem}>dwads</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text>Apply this job</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const buttonBase = { alignItems: 'center', justifyContent: 'center', paddingVertical: 8, borderRadius: 25 };
const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 30 },
  title: { fontFamily: theme.font.bold, fontSize: 18 },
  category: { fontFamily: theme.font.medium, fontSize: 13 },
  dataContainer: {
    marginVertical: 15,
  },
  dataItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconItem: {
    marginRight: 10,
  },
  textItem: {
    fontFamily: theme.font.regular,
    fontSize: 15,
  },
  button: {
    ...buttonBase,
    backgroundColor: theme.colors.primary,
    marginVertical: 20
  },
});
