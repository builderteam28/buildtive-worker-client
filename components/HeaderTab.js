import { Pressable, Text, View } from 'react-native';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../helpers/theme';

export default function HeaderTab({ navigation, route, options }) {
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
        <Text style={{ fontSize: 16, fontWeight: '500' }}>John Wick</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="location-pin" size={14} color="black" />
          <Text style={{ fontSize: 12 }}>Indonesia</Text>
        </View>
      </View>
      <TouchableOpacity style={{ backgroundColor: theme.colors.black, padding: 10, borderRadius: 15 }}>
        <MaterialIcons name="logout" size={18} color={theme.colors.white}/>
      </TouchableOpacity>
    </View>
  );
}
