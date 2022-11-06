import * as React from 'react';
import * as Location from 'expo-location';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { theme } from '../helpers/theme';

export default function MapDetail({ lat, long }) {
  const LAT = lat ?? -6.1753917;
  const LONG = long ?? 106.8271517;

  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  // LOCATION "latitude": -6.1753917, "longitude": 106.8271517,

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
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
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          // initialRegion={{ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
          initialRegion={{ latitude: LAT, longitude: LONG, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        >
          <Marker
            // coordinate={{
            //   latitude: location.coords.latitude,
            //   longitude: location.coords.longitude,
            // }}
            coordinate={{
              latitude: LAT,
              longitude: LONG,
            }}
            pinColor="black"
          ></Marker>
        </MapView>
      </View>
    );
  } else if (!loading && !errorMsg) {
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
    height: Dimensions.get('window').height,
  },
});
