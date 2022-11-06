import { StyleSheet, Text, View } from 'react-native';
import { Octicons, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { theme } from '../helpers/theme';
export const ProfileWorker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Octicons name="feed-person" size={80} color="#FFC536" style={{ marginBottom: 10 }} />
        <Text style={{ fontSize: 20, fontFamily: theme.font.bold }}>Ujang Kempot</Text>
        <Text style={{ fontSize: 18, fontFamily: theme.font.regular }}>Work Category: Plumber</Text>
        <Text style={{ fontSize: 16, fontFamily: theme.font.regular }}>
          <FontAwesome name="phone" size={14} color="black" style={{ marginRight: 10 }} /> 0987654321
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: theme.colors.grey,
            }}
          >
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="star" size={20} color="gold" style={{ marginRight: 10 }} />
                <Text style={[styles.text]}>4.9</Text>
              </View>
              <View>
                <Text style={[styles.text]}>Rating</Text>
              </View>
            </View>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name="rate-review" size={20} color="white" style={{ marginRight: 10 }} />
                <Text style={styles.text}>100</Text>
              </View>
              <View>
                <Text style={styles.text}>Reviews</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              backgroundColor: theme.colors.grey,
            }}
          >
            <Text style={styles.text}>My balances</Text>
            <Text style={styles.text}>1000000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: theme.font.regular,
    color: theme.colors.white,
  },
});
