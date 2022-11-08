import { Text, View } from 'react-native';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../helpers/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../stores/actions/userActions';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { username, location } = useSelector((state) => state.user);
  const navigation = useNavigation();
  const logout = async () => {
    await AsyncStorage.removeItem('access_token');
    navigation.replace('Login');
  };

  useEffect(() => {
    dispatch(getLocation())
      .then((data) => {
        if (data) {
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>;
  }

  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Octicons name="feed-person" size={30} color="black" style={{ marginRight: 8 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>{username}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="location-pin" size={14} color="black" />
          <Text style={{ fontSize: 12 }}>{location}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={logout} style={{ backgroundColor: theme.colors.black, padding: 10, borderRadius: 15 }}>
        <MaterialIcons name="logout" size={18} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
}
