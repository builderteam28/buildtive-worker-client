import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function IconBuildHub() {
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.logo} source={require('../assets/buildhub.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20
  },
  logo: {
    width: 70,
    height: 70,
  },
});
