import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
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

      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          paddingHorizontal: '10%',
          paddingTop: '10%',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text style={styles.title}>Perbaikan pagar gedung sekolah</Text>
        <Text style={styles.category}>Category Name</Text>

        <View style={styles.dataContainer}>
          <View style={styles.dataItem}>
            <Ionicons name="location-sharp" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>Jalan Tikus No.15, Kebon Jeruk, Jakarta Barat</Text>
          </View>
          <View style={styles.dataItem}>
            <Ionicons name="people" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>3 / 20</Text>
          </View>
          <View style={styles.dataItem}>
            <MaterialIcons name="attach-money" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>100000</Text>
          </View>
          <View style={styles.dataItem}>
            <AntDesign name="clockcircle" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>dwads</Text>
          </View>
          <View style={{ marginVertical: 20, height: 120 }}>
            <Text style={[{ fontFamily: theme.font.bold }]}>Description</Text>
            <ScrollView>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={[styles.button, { shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }]}>
          <Text style={{ fontFamily: theme.font.bold }}>Apply this job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const buttonBase = { alignItems: 'center', justifyContent: 'center', paddingVertical: 8, borderRadius: 25 };
const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontFamily: theme.font.bold, fontSize: 20 },
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
    margin: 20,
  },
});
