import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Octicons, FontAwesome } from '@expo/vector-icons';
import { theme } from '../helpers/theme';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../stores/actions/userActions';
export const ProfileWorker = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { profile } = useSelector((state) => state.user);
  useFocusEffect(
    useCallback(() => {
      dispatch(getUser())
        .then((data) => {
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
      <View style={styles.containerInfo}>
        <Octicons name="feed-person" size={80} color="#FFC536" style={{ marginBottom: 10 }} />
        <Text style={{ fontSize: 20, fontFamily: theme.font.bold }}>{profile.fullName}</Text>
        <Text style={{ fontSize: 18, fontFamily: theme.font.regular }}>Work Category: {profile.WorkerCategories[0].Category.name}</Text>
        <Text style={{ fontSize: 16, fontFamily: theme.font.regular }}>
          <FontAwesome name="phone" size={14} color="black" style={{ marginRight: 10 }} /> {profile.phoneNumber}
        </Text>
      </View>
      <View style={{ flex: 2, marginHorizontal: '10%' }}>
        <View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              paddingVertical: 20,
              borderRadius: 10,
              backgroundColor: theme.colors.grey,
              marginBottom: 30,
            }}
          >
            <View>
              <View style={{ alignItems: 'center' }}>
                <Text style={[styles.text]}>Rating Overview</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[styles.text]}>
                  <Text style={([styles.text], { fontSize: 48 })}>{profile.avgRating}</Text>/5
                </Text>
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.text}>{profile.totalRating} Ratings</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              paddingVertical: 20,
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: theme.colors.grey,
            }}
          >
            <Text style={styles.text}>My balances</Text>
            <Text style={styles.text}>{formatPrice(profile.balance ?? 0)}</Text>
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
    fontSize: 15,
    fontFamily: theme.font.regular,
    color: theme.colors.white,
  },
});
