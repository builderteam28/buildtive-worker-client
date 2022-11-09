import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../helpers/theme';
import MapDetail from '../components/MapDetail';
import { applyProject, getProjectDetails } from '../stores/actions/projectActions';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import errorHandler from '../helpers/errorHandler';

export const ProjectDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.project);
  const [isLoading, setIsLoading] = useState(true);
  const { id, status } = route.params;

  useFocusEffect(
    useCallback(() => {
      dispatch(getProjectDetails(id))
        .then((data) => {
          console.log(data, '<<data');
          if (data) {
            setIsLoading(false);
          }
        })
        .catch(() => {
          setIsLoading(false);
        });
    }, [])
  );

  const formatPrice = (price) => {
    return 'Rp ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',-';
  };

  const handleApply = () => {
    dispatch(applyProject(id))
      .then((data) => {
        if (data) {
          Alert.alert('Success', 'Thank you for registering to this project', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

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
    <View style={styles.container}>
      <MapDetail lat={project.lat} long={project.long} />

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
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{project.name}</Text>
            <Text style={styles.category}>{project.Category.name}</Text>
          </View>
          <View>
            {status ? (
              <View style={[styles.statusContainer, { backgroundColor: theme.colors.black }]}>
                <Text style={{ fontFamily: theme.font.bold, color: theme.colors.white }}>{status}</Text>
              </View>
            ) : undefined}
          </View>
        </View>

        <View style={styles.dataContainer}>
          <View style={styles.dataItem}>
            <Ionicons name="location-sharp" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>{project.address}</Text>
          </View>
          <View style={styles.dataItem}>
            <Ionicons name="people" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>{project.acceptedWorker + '/' + project.totalWorker}</Text>
          </View>
          <View style={styles.dataItem}>
            <MaterialIcons name="attach-money" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>{formatPrice(project.cost)}</Text>
          </View>
          <View style={styles.dataItem}>
            <AntDesign name="clockcircle" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>{project.tenor} days</Text>
          </View>
          <View style={{ marginVertical: 20, height: 120 }}>
            <Text style={[{ fontFamily: theme.font.bold }]}>Description</Text>
            <ScrollView>
              <Text>{project.description}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleApply()} style={[styles.button, { shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }]}>
          <Text style={{ fontFamily: theme.font.bold }}>Apply for this job</Text>
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
  statusContainer: {
    minWidth: 80,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
