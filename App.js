import { useFonts, Raleway_100Thin, Raleway_400Regular, Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { MainStackNavigation } from './navigation/MainStackNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={ReactNavTheme}>
      <SafeAreaView style={styles.container}>
        <MainStackNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const ReactNavTheme = {
  colors: {
    background: '#ffffff',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
