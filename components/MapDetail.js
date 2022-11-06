import * as React from 'react';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { theme } from '../helpers/theme';

export default function MapDetail() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLoading(false);
    })();
  }, []);

  if (location && !loading && !errorMsg) {
    console.log(location);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.04, longitudeDelta: 0.05 }}
        />
      </View>
    );
  } else if (loading && !errorMsg) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});
